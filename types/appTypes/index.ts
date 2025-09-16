export interface ThemeColors {
  bg: string;
  text: string;
  accent: string;
  border: string;
  card: string;
  headingFont: string;
  bodyFont: string;
}

export type Theme =
  | "light"
  | "dark"
  | "blue"
  | "slateAmber"
  | "slateAmberDark"
  | "emerald"
  | "violet"
  | "rose";

export type Font =
  | "inter"
  | "poppins"
  | "source-sans"
  | "nunito-sans"
  | "geist";
