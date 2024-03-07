# Project Name README

This README will guide you through the installation process, setting up the development environment, and building the project for production.

## Installation

To get started, make sure you have Node.js installed on your machine. The project requires Node.js version 18.17.0 or later.

1. Clone the repository to your local machine:

```bash
git clone https://github.com/MarcoMruz/gb-product-page.git
```

2. Navigate to the project directory:

```bash
cd gb-product-page
```

3. Install dependencies using npm:

```bash
npm install
```

## Development Environment

To run the project in the development environment, use the following command:

```bash
npm run dev
```

This command will start a local development server and open the project in your default web browser. Any changes you make to the source code will automatically trigger hot-reloading for instant feedback.

We are not using any specific secrets, so you do not to create .env file to be able to run project.

## Building for Production

To build the project for production, execute the following command:

```bash
npm run build
```

This command will generate a production-ready build of the project, optimized for performance and ready for deployment.

## Next.js meta-framework

In this project, we leverage Next.js version 14, a powerful meta-framework built on React. Next.js simplifies server-rendered React applications, offering features like SSR, SSG, automatic code splitting, file-based routing, and API routes. While it has a learning curve and may introduce complexity, Next.js excels in performance and developer experience, making it an ideal choice for modern web applications.

For our usage we will mainly take an advantage of SSR since it will help us to improve our SEO and from the performance perspective it will move logic to the server and not to handle it on client's device. We aimed our eyes on this framework because it is based on React and it will help us more easily to find new developers since it has strong representation between developers at current state of workforce market.

## Global State Management: Zustand

This project utilizes Zustand for global state management. Zustand is a small, fast, and reactive state management library for React applications. It provides a simple and efficient way to manage application state, making it easier to share state across components.

In this project we used Zustand because of the size of the project and our specific needs are fulfilled by this small library. If you would like to learn more about its abilities, or to see docs when implementing see documentation for Zustand [here](https://docs.pmnd.rs/zustand/getting-started/introduction)

## Type Safety with io-ts and fp-ts

To ensure type safety and better handling of server responses, we use io-ts and fp-ts libraries.

- **io-ts**: io-ts is a library for runtime type checking and decoding. It allows us to define TypeScript types for our data structures and automatically validate and decode data received from the server.

- **fp-ts**: fp-ts is a functional programming library for TypeScript. It provides a set of composable and immutable data types and functions, allowing us to write type-safe and expressive code.

We use these libraries and its functionalities in specific folder structure models are in [src/types/models.ts](src/types/models.ts) and functions, that handle decoding of server responses are in [src/utils/<model-name.utils.ts>](src/utils/sport-nutrition.utils.ts)

## TypeScript

This project is written in TypeScript, a statically typed superset of JavaScript. TypeScript helps catch errors and provides better tooling support for code refactoring, ensuring a more robust and maintainable codebase.

By using TypeScript, you can catch type-related errors during development, reducing the likelihood of bugs in the production code.
