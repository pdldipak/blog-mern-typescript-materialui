import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { postTypes } from '../../types/type';

type Props = {
  posts: postTypes[];
};

const initialState: Props = {
  posts: [],
};

export const BlogsContext = createContext<Props>(initialState);

export const BlogsContextProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const { search } = useLocation();
  console.log('search', search);
  const [posts, setPosts] = useState<postTypes[]>([]);
  console.log('posts: ', posts);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/blog/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <BlogsContext.Provider value={{ posts }}>{children}</BlogsContext.Provider>
  );
};
