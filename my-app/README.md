# Landing Page Template

A world-class landing page starter with **Next.js**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **shadcn/ui**. Build beautiful, animated landing pages with a minimal, flexible foundation.

---

## 🚀 Features

- **Next.js**: The React framework for production.
- **TypeScript**: Strongly typed JavaScript for better developer experience.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Framer Motion**: Smooth animations and transitions for your app.
- **shadcn/ui**: Pre-built, accessible, and customizable UI components.
- **Dark Mode Support**: Built-in light/dark theme toggle.
- **Responsive Design**: Fully responsive layout with mobile-friendly navigation.
- **Landing Page Ready**: Minimal hero, nav, and footer placeholders—add your content and ship.

---

## 📂 Folder Structure

```
ts-tailwind-motion-shadcn-starter/
├── app/                   # App Router structure
│   ├── layout.tsx         # Root layout with Navbar and ThemeProvider
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/            # Contact page
│   ├── not-found.tsx      # Custom 404 page
├── components/            # Reusable components (Navbar, PageTransition, etc.)
├── styles/                # Global styles (Tailwind CSS)
├── public/                # Static assets (images, icons)
├── README.md              # Project documentation
├── tsconfig.json          # TypeScript configuration file
└── package.json           # Project dependencies and scripts

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.dev/)

---

## 📦 Installation

To create a new project using this template, run the following command:

```sh
npx create-next-app@latest --example "https://github.com/parampatil/ts-tailwind-motion-shadcn-starter" your-project-name
```

Replace `your-project-name` with the desired name of your project.

---

## 🖥️ Usage

1. Navigate to the project directory:

```sh
cd your-project-name
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Open your browser and go to `http://localhost:3000`.

---

## 🌟 Features in Action

### Navbar:
- Responsive navigation bar with active link highlighting.
- Dark mode toggle button.

### Page Transitions:
- Smooth crossfade transitions between pages using Framer Motion.

### 404 Page:
- A custom "Page Not Found" screen with animations.

---

## 📝 Customization

Feel free to customize the following files to suit your project needs:

1. **Tailwind Configuration**: Modify `app/globals.css` for custom themes or plugins.
2. **Navbar Links**: Update `components/layout/MenuItems.ts` to add or modify navigation links.
3. **Animations**: Adjust animation settings in `PageTransition.tsx` or `Navbar.tsx`.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have suggestions or improvements.

---

## 🙏 Acknowledgments

Special thanks to:
- [shadcn/ui](https://ui.shadcn.dev/) for providing accessible UI components.
- [Framer Motion](https://www.framer.com/motion/) for smooth animations.
- [Tailwind CSS](https://tailwindcss.com/) for making styling effortless.

---

## 📅 Last Updated

This README was last updated on **March 04, 2025**.