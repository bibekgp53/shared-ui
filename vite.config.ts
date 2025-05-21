
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from 'vite-plugin-dts';
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    dts({
      include: ['src/components/**/*.{ts,tsx}'],
      exclude: ['**/*.test.tsx', '**/*.stories.tsx', '*.config.js', '*.config.ts', 'eslint.config.js', '**/node_modules/**'],
      outDir: 'dist/types',
      rollupTypes: false, // Set to false to prevent consolidating types
      staticImport: true, // Convert dynamic imports to static for better type generation
      insertTypesEntry: true, // Automatically add types field to package.json
      tsconfigPath: path.resolve(__dirname, './src/components/tsconfig.json'),
    }),
  ].filter(Boolean),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.ts'),
      name: 'UIComponents',
      fileName: (format) => `shared-ui.${format}.js`,
      formats: ['es'],
    },
    minify: false,
    sourcemap: true,
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'shared-ui.css';
          return assetInfo.name || '';
        }
      },
    },
    cssCodeSplit: false, // This ensures all CSS is bundled into one file
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
