export type postTypes = {
  description: string;
  image: string;
  imageText: string;
  linkText: string[];
  title: string;
};

export type ThemeContext = {
  mode: string;
  toggle(): void;
};
