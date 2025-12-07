# Agent Guidelines for Fineye DS

## Build/Lint/Test Commands

### Development
- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally

### Type Checking
- `npx astro check` - Run Astro's built-in type checking
- `npx tsc --noEmit` - Run TypeScript compiler for type checking only

### Linting & Formatting
- No linting tools currently configured. Consider adding:
  - ESLint: `npm run lint`
  - Prettier: `npm run format`

### Testing
- No testing framework currently configured. Consider adding:
  - Vitest: `npm run test` (single test: `npm run test -- <test-file>`)
  - Playwright: `npm run test:e2e`

## Code Style Guidelines

### TypeScript & Astro
- Use strict TypeScript configuration (extends `astro/tsconfigs/strict`)
- Define interfaces for component props at the top of .astro files
- Use proper type annotations for all variables and functions
- Avoid `any` type; use specific types or `unknown`

### Imports
- Use relative imports for local files (`../layouts/Layout.astro`)
- Group imports: Astro imports first, then utilities
- No unused imports allowed

### Naming Conventions
- **Files**: PascalCase for components (Layout.astro), kebab-case for pages (work.astro)
- **CSS Classes**: kebab-case with BEM-like structure (`.project-card`, `.nav-content`)
- **CSS Variables**: kebab-case with descriptive prefixes (`--brand-primary`, `--text-base`)
- **TypeScript**: PascalCase for interfaces/types, camelCase for variables/functions

### CSS & Styling
- Use CSS custom properties (variables) for design tokens
- Follow mobile-first responsive design
- Use CSS Grid and Flexbox for layouts
- Include hover/focus states for interactive elements
- Use `is:global` for global styles in Astro components
- Maintain consistent spacing using CSS variables (`--space-*`)

### HTML & Accessibility
- Use semantic HTML elements (`<main>`, `<section>`, `<header>`, `<nav>`)
- Include skip links for keyboard navigation
- Add proper ARIA labels where needed
- Include Open Graph and Twitter Card meta tags
- Ensure proper heading hierarchy (h1 → h2 → h3)

### Error Handling
- Use try/catch blocks for async operations
- Provide meaningful error messages
- Handle loading states appropriately
- Validate props and provide defaults

### Performance
- Optimize images with proper alt text
- Use lazy loading for non-critical resources
- Minimize CSS/JS bundle size
- Follow Astro's performance best practices

### Git Workflow
- Commit frequently with descriptive messages
- Use conventional commit format when possible
- Test builds before committing
- Keep commits focused on single changes

## Project Structure
```
src/
├── layouts/     # Page layouts
├── pages/       # Route pages (.astro files)
└── components/  # Reusable components (when added)
```

## Dependencies
- Astro 5.16.4 (framework)
- TypeScript (strict mode)
- No additional dependencies currently

## Quality Checks
Before committing:
1. Run `npm run build` to ensure production build succeeds
2. Run `npx astro check` for type checking
3. Test responsive design across breakpoints
4. Verify accessibility with keyboard navigation</content>
<parameter name="filePath">AGENTS.md