import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';
import telegramHandler from './api/telegram';

function telegramDevServerPlugin(): Plugin {
  return {
    name: 'telegram-api-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/telegram', async (req, res) => {
        let rawBody = '';

        for await (const chunk of req) {
          rawBody += chunk;
        }

        let body: unknown = {};

        try {
          body = rawBody ? JSON.parse(rawBody) : {};
        } catch {
          res.statusCode = 400;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({error: 'Invalid JSON body'}));
          return;
        }

        await telegramHandler(
          {method: req.method, body},
          {
            status: (code: number) => ({
              json: (responseBody: unknown) => {
                res.statusCode = code;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(responseBody));
              },
            }),
          },
        );
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), telegramDevServerPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      open: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
