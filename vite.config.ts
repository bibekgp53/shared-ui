
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    dts({
      include: ['src/components/shared/**/*.{ts,tsx}'],
      exclude: ['**/*.test.tsx', '**/*.stories.tsx'],
      outDir: 'dist/types',
    }),
  ].filter(Boolean),
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/shared/index.ts'),
      name: 'SharedUIComponents',
      fileName: (format) => `shared-ui.${format}.js`,
      formats: ['es'],
    },
    minify: false,
    sourcemap: true,
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
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
