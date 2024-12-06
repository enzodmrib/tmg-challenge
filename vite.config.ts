import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    exclude: ['node_modules', 'dist'],
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['text', 'html'],
    },
  },
});
