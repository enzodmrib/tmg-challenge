import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true, // Enable global test functions like `describe`, `it`
    environment: 'node', // Set the test environment ('node', 'jsdom', or 'happy-dom')
    exclude: ['node_modules', 'dist'], // Exclude certain files/folders
    coverage: {
      reportsDirectory: './coverage', // Output directory for coverage reports
      reporter: ['text', 'html'], // Coverage reporters
    },
  },
});
