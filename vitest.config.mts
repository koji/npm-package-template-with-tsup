import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Test environment
    environment: 'node',
    
    // Include test files
    include: ['test/**/*.test.ts'],
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: [
        'node_modules/',
        'dist/',
        'test/',
        '**/*.d.ts',
        '**/*.config.*',
      ],
    },
    
    // Global test timeout
    testTimeout: 10000,
    
    // Enable globals (optional - allows using describe, it, expect without imports)
    // globals: true,
  },
});
