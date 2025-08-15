import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

<<<<<<< HEAD
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];
=======
const eslintConfig = [...compat.extends("next/core-web-vitals")];
>>>>>>> 46b4dff61e97200d1c35c0f6f128858f02e2226a

export default eslintConfig;
