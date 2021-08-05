import React, { useContext } from 'react';
import { BlogsContext } from '../../context/blogsContext/BlogContext';
import { postTypes } from '../../types/type';
import Post from '../post/Post';

type Props = {
  posts: postTypes[];
};

const Posts: React.FC = () => {
  const { posts } = useContext<Props>(BlogsContext);
  return (
    <article>
      {posts?.map(post => (
        <Post key={post.title} post={post} />
      ))}
    </article>
  );
};

export default Posts;
