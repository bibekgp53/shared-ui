
// Add these scripts to your package.json
module.exports = {
  "storybook": "storybook dev -p 6006",
  "build-storybook": "storybook build",
  "build:lib": "tsc -p src/components/shared/tsconfig.json && vite build"
};
