<p align="center">
  <img width="100%" src="https://pbs.twimg.com/media/GR5B3dVXUAAmNYU?format=png&name=900x900" alt="Arabesq Design System" />
</p>

# Arabesq

Arabesq is a comprehensive Arabic design system aimed at providing a complete set of tools for designing user interfaces in the Arabic language. Whether you're creating a new project or optimizing an existing one, Arabesq offers a wide range of components, patterns, and templates that streamline the design process and ensure consistency and quality across your projects. Our design system includes essential elements such as buttons, input fields, sliders, checkboxes, radio buttons, dropdowns, and more, all designed with the unique characteristics of Arabic typography and layout in mind.

## License

Arabesq is licensed under the [MIT License](./LICENSE).

## Getting Started

Visit the documentation in [apps/docs](./apps/docs) to get started with Arabesq.

## Figma Community File

You can explore and duplicate the Arabesq design system on Figma:

[Arabesq Figma Community File](https://www.figma.com/community/file/1391785269302524061)

## Repository Structure

This repository is organized as a monorepo (Turborepo) and is managed with [PNPM](https://pnpm.io).

## Packages

- [packages/wedges](./packages/wedges) - The core UI library containing all components, utilities, and core functionality of the Arabesq design system.
- [packages/eslint-config](./packages/eslint-config/) - Shared ESLint configuration for all packages and apps in this monorepo.

## Apps

- [apps/docs](./apps/docs) - The Next.js documentation site for the Arabesq design system. This is where you'll find documentation, examples, and guides for using the library.

## Development

1. Clone the monorepo.
2. Install the necessary dependencies using PNPM:

```bash
pnpm i --hoist
```

To start the development server, run:

```bash
pnpm dev
```

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repo and create a pull request, or open an issue with the tag "enhancement."

Please refer to the [CONTRIBUTING](./CONTRIBUTING.md) for more information.

## Created by

Created by [Hassan](https://www.hassan.design/) and [Adham Mohamed](https://adham.app/).

---

*This project is maintained by the Arabesq team. If you have questions or want to connect, please open an issue or pull request on GitHub.*
