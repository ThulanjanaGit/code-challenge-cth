# 🚗 Vehicle Listings App — React + TypeScript + Vite

This is a frontend coding challenge solution to display vehicle search results and detailed views using **React**, **TypeScript**, and **Vite**. The app loads vehicle data from a JSON file and allows filtering, sorting, and exploring each vehicle with a clean UI.

---

## 📦 Install Dependencies

```bash
npm install
```

## ▶️ Run the Development Server

```bash
npm run dev
```

## 🧪 Run Tests

```bash
npm run test
```

---

## 🧩 Features

### 🔍 Filter Vehicles by:

- Make
- Model
- Starting Bid Range
- Favourites Only

### ↕️ Sort Vehicles by:

- Make
- Starting Bid
- Mileage
- Auction Date

### 💡 Additional Features:

- ❤️ **Mark as Favourite:** Toggle favourite status
- ⏱️ **Auction Countdown:** Shows days/hours left until auction
- 🧭 **Vehicle Detail Page:** Full specs, ownership, and equipment
- 🗂️ **Pagination:** Custom vehicles per page
- 🖼️ **Image Placeholder:** For each vehicle card
- 🧠 **State Management:** Using React hooks and context
- 🧪 **Testing:** With React Testing Library

---

## ✅ ESLint Configuration

We’ve extended type-safe linting rules for clean and maintainable code.

### 🔒 Basic Type-Aware Linting

```ts
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### ⚛️ Optional: React-specific Plugins

Install `eslint-plugin-react-x` and `eslint-plugin-react-dom` for extra lint rules:

```ts
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

---

## 🧪 Testing Strategy

Testing is done using **React Testing Library**, with focus on:

- Vehicle card rendering
- Favourite toggle
- Filter & sort logic
- Pagination handling
- Detail page navigation

Run tests with:

```bash
npm run test
```

---

## 📝 Developer Notes

- Responsive UI built with Tailwind CSS
- Accessible markup and semantic HTML
- Modular components and hooks
- Static JSON used for dataset simulation
- Project ready to scale with API support

---

## 📎 License

This project is submitted as part of a technical assessment and is intended for demonstration purposes only.

---
