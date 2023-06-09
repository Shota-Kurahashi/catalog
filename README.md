# UI Catalog

これは、Tailwind CSS を用いた UI コンポーネント集です。
次のサイトで storybook のページを確認できます。[Storybook](https://6473f87ff4bb6286042ad938-mtzjqyaqep.chromatic.com/?path=/docs/components-elements-button--docs)

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
  // ... other options
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        sans: ["Inter var", "sans-serif"],
      },
      animation: {
        spinner: "spinner 2s linear infinite",
        "spinner-child": "spinner-child 1.5s linear infinite",
      },
      keyframes: {
        spinner: {
          "100%": { transform: "rotate(360deg)" },
        },
        "spinner-child": {
          "0%": {
            "stroke-dasharray": "0 150",
            "stroke-dashoffset": "0",
          },
          "47.5%": { "stroke-dasharray": "42 150", "stroke-dashoffset": "-16" },
          "95%,100%": {
            "stroke-dasharray": "42 150",
            "stroke-dashoffset": "-59",
          },
        },
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
