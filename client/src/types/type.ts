export type postTypes = {
  desc: string;
  photo: string;
  imageText: string;
  categories: string[];
  title: string;
  createdAt: string | number | Date;
  _id: string;
  username: string;
};

export type ThemeContext = {
  mode: string;
  toggle(): void;
};
