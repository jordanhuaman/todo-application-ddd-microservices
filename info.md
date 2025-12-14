# Node Environment Todo Project

This project is a simple TODO service built with TypeScript and Drizzle ORM. It demonstrates basic TypeScript usage and database schema management with Drizzle.

## Project Structure
- `todo-service/` — Main service code, configuration, and scripts
- `info.md` — Project notes and learning resources

## Getting Started
1. Install dependencies:
   ```sh
   bun install
   # or
   npm install
   ```
2. Run the development server:
   ```sh
   bun run start:dev
   # or
   npm run start:dev
   ```
3. Use the interactive tools script:
   ```sh
   bash ./todo-service/tools.sh
   ```

## Learning Notes
### TypeScript
- **Declarations:** Use `declare` to define types or variables without implementation, useful for ambient declarations.

### Drizzle ORM
- **Migration Command:**
  - `npx drizzle-kit push` — Attempts to update the current table schema. If you change a column type, Drizzle will throw an error instead of overwriting, ensuring data safety.

## Troubleshooting
- If you encounter migration errors, check your schema changes and resolve type mismatches before pushing again.
- Use the tools script to run common commands interactively.

---
Feel free to expand this file with more notes, commands, or troubleshooting tips as you learn!