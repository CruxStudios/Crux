import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

function htmlInject() {
  const loadTagRegex = /<load\s+src="([^"]+)"\s*(?:\/>|><\/load>)/g;

  function processHtml(html) {
    return html.replace(loadTagRegex, (match, src) => {
      const filePath = path.resolve(process.cwd(), src);
      if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, 'utf-8');
        return processHtml(content);
      }
      console.warn(`[html-inject] File not found: ${filePath}`);
      return match;
    });
  }

  return {
    name: 'html-inject',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.html')) {
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    },
    transformIndexHtml(html) {
      return processHtml(html);
    }
  };
}

export default defineConfig({
  plugins: [htmlInject()]
});
