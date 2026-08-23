# 🚀 Next.js Production Starter Template

A practical Next.js foundation for teams that want a clean engineering baseline before application complexity starts growing.

Built with a focus on sensible defaults for code quality, application structure, resilience, testing, and continuous integration.

## What is included

- Next.js with App Router
- TypeScript
- Tailwind CSS
- ESLint
- Prettier with Tailwind class sorting
- Husky Git hooks
- lint-staged
- Conventional Commit validation
- Centralized site configuration
- Metadata baseline
- Environment configuration pattern
- Shared `Container` component
- `cn()` utility with `clsx` and `tailwind-merge`
- Loading state
- Error boundary
- Custom 404 page
- Vitest
- React Testing Library
- GitHub Actions CI

## 🏗️ Architecture & Folder Structure

The project follows a modular, scalable directory pattern designed to enforce separation of concerns:

```text
├── AGENTS.md
├── CLAUDE.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
├── commitlint.config.ts
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prettier.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── global-error.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── layout
│   │   │   ├── container.test.tsx
│   │   │   └── container.tsx
│   │   └── ui
│   │       ├── button.test.tsx
│   │       └── button.tsx
│   ├── config
│   │   └── site.ts
│   └── lib
│       └── utils.ts
├── tsconfig.json
├── tsconfig.tsbuildinfo
├── vitest.config.mjs
└── vitest.setup.ts
```

---

## 🛠️ Tech Stack & Tooling

- **Framework**: [Next.js 15+](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://typescriptlang.org) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Unit/Component Testing**: [Vitest](https://vitest.dev) & [React Testing Library](https://testing-library.com)
- **Automation Pipeline**: GitHub Actions CI
- **Code Quality**: ESLint, Prettier

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 20+** installed on your system.

### Local Development Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/allydevs-engineering/nextjs-production-starter.git
   cd nextjs-production-starter
   ```

2. **Install project dependencies:**

   ```bash
   npm ci
   ```

3. **Configure environment variables:**
   Duplicate the example configuration file and update the values:

   ```bash
   cp .env.example .env.local
   ```

4. **Launch the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the live template.

---

## 📦 Available Scripts

Execute these scripts from the root directory using your terminal:

| Script                 | Purpose                                                                            |
| :--------------------- | :--------------------------------------------------------------------------------- |
| `npm run dev`          | Spins up the local development server with hot-reloading.                          |
| `npm run build`        | Compiles an optimized, production-ready build output.                              |
| `npm run start`        | Starts the Next.js production server after building.                               |
| `npm run lint`         | Inspects your codebase for structural type, stylistic, and standard ESLint errors. |
| `npm run format:check` | Verifies your files conform to Prettier styling guides.                            |
| `npm run format:fix`   | Automatically formats your code based on Prettier guidelines.                      |
| `npm run test`         | Launches the Vitest execution block runner in interactive watch mode.              |
| `npm run test:run`     | Single execution run of the full test suite (ideal for automated environments).    |

---

## Code quality workflow

The repository includes a local Git workflow designed to catch basic issues before code is committed.

## Pre-commit

Staged files run through:

```
ESLint
↓
Prettier
```

## Testing

Component tests use:

- Vitest
- React Testing Library
- jsdom

## 🧪 Testing Guidelines

This project leverages **Vitest** and **JSDOM** to perform ultra-fast component testing without the overhead of heavy browser engines.

- **File Naming Pattern**: Always locate tests alongside their source files using the format `*.test.tsx` or `*.test.ts`.
- **Global Mocking**: Next.js specific components like `useRouter`, `usePathname`, and routing layers are automatically mocked globally within `vitest.setup.ts`.

To verify components locally before submitting changes, run:

```bash
npm run test:run
```

---

## 🤖 Continuous Integration Pipeline

GitHub Actions runs the project quality checks on repository pushes and pull requests. Every push or Pull Request targeting `main`, `master`, or `develop` triggers an automated GitHub Actions pipeline (`.github/workflows/ci.yml`).

The pipeline verifies:

```
Format check
    ↓
Lint
    ↓
Tests
    ↓
Production build
```

The pipeline runs sequentially through the following gates:

1. **Dependency Analysis**: Validates lockfile integrity via clean installation rules (`npm ci`).
2. **Quality Verification**: Assesses code formatting (`prettier`), strict code style rules (`next lint`), and strict type architecture checks (`tsc`).
3. **Test Safety Execution**: Executes the complete Vitest component validation matrix.
4. **Production Readiness Build**: Compiles a real-world server production deployment asset to catch hidden bundling failures.

---

## 📝 Commit Standard Conventions

To keep our commit history clear, legible, and easy to parse, follow the standardized **Conventional Commits** naming convention:

- `feat:` Introduces a brand new feature or module to the codebase.
- `fix:` Patches a bug or addresses a runtime malfunction.
- `docs:` Modifying or adding text within Markdown or documentation files.
- `style:` Formatting code, fixing lint styles, or adjusting missing semicolons (no operational logic code changes).
- `refactor:` Changes to structural code that neither fixes a bug nor adds a feature.
- `test:` Appending missing unit tests or adjusting testing code.
- `chore:` Maintenance updates, dependency version alignment bumps, or tooling adjustments (`next.config.js`, `tsconfig.json`).

Examples:

```
feat: add authentication flow
fix: handle invalid configuration
docs: update setup instructions
test: add container tests
chore: update dependencies
```

---

## Why this exists

Production problems are easier to prevent when basic engineering practices are established early.

This starter provides a small, understandable foundation rather than a large boilerplate containing features every project may not need.

The goal is not to solve every application concern.

The goal is to start with:

- a clear project structure
- consistent code formatting
- commit validation
- basic application boundaries
- automated testing
- continuous integration

From there, teams can add the architecture and capabilities their specific application requires.

## What is intentionally not included

This repository does not include:

- Authentication
- Database or ORM
- State management library
- API implementation
- Docker
- E2E testing
- Analytics
- A component library
- Application-specific business logic

These choices depend on the requirements of the application being built.

## Contributing

Contributions, improvements and discussions are welcome.
Before opening a pull request:

- Run formatting checks.
- Run linting.
- Run the test suite.
- Ensure the production build succeeds.
- Use a Conventional Commit message.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development and contribution guidelines.

## Security

Please review [SECURITY.md](./SECURITY.md) for information about reporting security vulnerabilities.

## Maintained by

AllyDevs Engineering

Engineering capability for digital agencies.

Website: [https://allydevs.com](https://allydevs.com)

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
