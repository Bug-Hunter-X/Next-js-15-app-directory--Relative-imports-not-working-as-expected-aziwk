# Next.js 15 App Directory Relative Imports Bug

This repository demonstrates a bug encountered in Next.js 15's App Directory when using relative imports within nested component directory structures.  The issue arises when attempting to import components from sibling directories, resulting in unexpected module resolution behavior or build errors.

## Bug Description

When organizing components into nested directories within the `app` directory and trying to import components that reside in sibling directories relative to the current component, the import path may resolve incorrectly or fail completely, preventing the application from building or running correctly.  This behavior is inconsistent with the expectations of standard Node.js module resolution.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Attempt to run the development server using `npm run dev`.

The application will exhibit the described unexpected import resolution behavior.

## Solution

The solution involves restructuring the directory hierarchy and/or utilizing absolute imports from the `app` directory root to ensure correct module resolution. 