# UI Catalog

これは、Tailwind CSS を用いた UI コンポーネント集です。

### 説明

この UI コンポーネント集は、Tailwind CSS を用いて作成されています。
Font には、[Inter](https://fonts.google.com/specimen/Inter)を使用しています。

### 依存関係 (太字のものは、必須です)

- **[Tailwind CSS](https://tailwindcss.com/)**

- **[Heroicons](https://heroicons.com/)**

- [Headlessui](https://headlessui.dev/)

- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)

### インストール

```bash
pnpm add @heroicons/react @headlessui/react tailwind-merge clsx

pnpm add -D @tailwindcss/aspect-ratio @tailwindcss/forms
```

以下のコードを、`tailwind.config.js`に追加してください。

```js
module.exports = {
  theme: {
    extend: {
      // ...other configurations
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        sans: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
```

以下の関数を作成してください。

```js
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: (string | undefined)[]) => {
  return twMerge(clsx(...classNames));
};
```

以下の CSS を Tailwind.css に追加してください

```css
.spinner_V8m1 {
  transform-origin: center;
  animation: spinner_zKoa 2s linear infinite;
}

.spinner_V8m1 circle {
  stroke-linecap: round;
  animation: spinner_YpZS 1.5s ease-in-out infinite;
}

@keyframes spinner_zKoa {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spinner_YpZS {
  0% {
    stroke-dasharray: 0 150;
    stroke-dashoffset: 0;
  }
  47.5% {
    stroke-dasharray: 42 150;
    stroke-dashoffset: -16;
  }
  95%,
  100% {
    stroke-dasharray: 42 150;
    stroke-dashoffset: -59;
  }
}
```
