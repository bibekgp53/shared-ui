// vite.config.ts
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/project/node_modules/lovable-tagger/dist/index.js";
import dts from "file:///home/project/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/home/project";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    dts({
      include: ["src/components/shared/**/*.{ts,tsx}"],
      exclude: ["**/*.test.tsx", "**/*.stories.tsx", "*.config.js", "*.config.ts", "eslint.config.js", "**/node_modules/**"],
      outDir: "dist/types",
      rollupTypes: true,
      // Consolidate types
      staticImport: true,
      // Convert dynamic imports to static for better type generation
      insertTypesEntry: true,
      // Automatically add types field to package.json
      tsconfigPath: path.resolve(__vite_injected_original_dirname, "./src/components/shared/tsconfig.json")
    })
  ].filter(Boolean),
  build: {
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "src/components/shared/index.ts"),
      name: "SharedUIComponents",
      fileName: (format) => `shared-ui.${format}.js`,
      formats: ["es"]
    },
    minify: false,
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime"
        },
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js"
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogXCI6OlwiLFxuICAgIHBvcnQ6IDgwODAsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIG1vZGUgPT09ICdkZXZlbG9wbWVudCcgJiZcbiAgICBjb21wb25lbnRUYWdnZXIoKSxcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWydzcmMvY29tcG9uZW50cy9zaGFyZWQvKiovKi57dHMsdHN4fSddLFxuICAgICAgZXhjbHVkZTogWycqKi8qLnRlc3QudHN4JywgJyoqLyouc3Rvcmllcy50c3gnLCAnKi5jb25maWcuanMnLCAnKi5jb25maWcudHMnLCAnZXNsaW50LmNvbmZpZy5qcycsICcqKi9ub2RlX21vZHVsZXMvKionXSxcbiAgICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnLFxuICAgICAgcm9sbHVwVHlwZXM6IHRydWUsIC8vIENvbnNvbGlkYXRlIHR5cGVzXG4gICAgICBzdGF0aWNJbXBvcnQ6IHRydWUsIC8vIENvbnZlcnQgZHluYW1pYyBpbXBvcnRzIHRvIHN0YXRpYyBmb3IgYmV0dGVyIHR5cGUgZ2VuZXJhdGlvblxuICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSwgLy8gQXV0b21hdGljYWxseSBhZGQgdHlwZXMgZmllbGQgdG8gcGFja2FnZS5qc29uXG4gICAgICB0c2NvbmZpZ1BhdGg6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb21wb25lbnRzL3NoYXJlZC90c2NvbmZpZy5qc29uJyksXG4gICAgfSksXG4gIF0uZmlsdGVyKEJvb2xlYW4pLFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tcG9uZW50cy9zaGFyZWQvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdTaGFyZWRVSUNvbXBvbmVudHMnLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBzaGFyZWQtdWkuJHtmb3JtYXR9LmpzYCxcbiAgICAgIGZvcm1hdHM6IFsnZXMnXSxcbiAgICB9LFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdyZWFjdC9qc3gtcnVudGltZSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgICAncmVhY3QtZG9tJzogJ1JlYWN0RE9NJyxcbiAgICAgICAgICAncmVhY3QvanN4LXJ1bnRpbWUnOiAnanN4UnVudGltZScsXG4gICAgICAgIH0sXG4gICAgICAgIHByZXNlcnZlTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgcHJlc2VydmVNb2R1bGVzUm9vdDogJ3NyYycsXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnW25hbWVdLmpzJyxcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6ICdbbmFtZV0uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgIH0sXG4gIH0sXG59KSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHVCQUF1QjtBQUNoQyxPQUFPLFNBQVM7QUFMaEIsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUyxpQkFDVCxnQkFBZ0I7QUFBQSxJQUNoQixJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMscUNBQXFDO0FBQUEsTUFDL0MsU0FBUyxDQUFDLGlCQUFpQixvQkFBb0IsZUFBZSxlQUFlLG9CQUFvQixvQkFBb0I7QUFBQSxNQUNySCxRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUE7QUFBQSxNQUNiLGNBQWM7QUFBQTtBQUFBLE1BQ2Qsa0JBQWtCO0FBQUE7QUFBQSxNQUNsQixjQUFjLEtBQUssUUFBUSxrQ0FBVyx1Q0FBdUM7QUFBQSxJQUMvRSxDQUFDO0FBQUEsRUFDSCxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLGtDQUFXLGdDQUFnQztBQUFBLE1BQy9ELE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLGFBQWEsTUFBTTtBQUFBLE1BQ3pDLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLGFBQWEsbUJBQW1CO0FBQUEsTUFDcEQsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFVBQ1AsYUFBYTtBQUFBLFVBQ2IscUJBQXFCO0FBQUEsUUFDdkI7QUFBQSxRQUNBLGlCQUFpQjtBQUFBLFFBQ2pCLHFCQUFxQjtBQUFBLFFBQ3JCLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
