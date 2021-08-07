import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';


type nameType = {
  name: string;
  _id: string;
};

type Props = {
  categories: nameType[];
};

const initialState: Props = {
  categories: [],
};

export const CategoryContext = createContext<Props>(initialState);

export const CategoryContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [categories, setCategories] = useState<nameType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/blog/categories');
      setCategories(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};
