import { en } from "@/content/en";
import { es } from "@/content/es";

export const dictionaries = { es, en };
export type Locale = keyof typeof dictionaries;
export const getDictionary = (locale: Locale) => dictionaries[locale];
