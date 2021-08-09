import React, { useState, useContext } from 'react';
import { Pagination, Stack } from '@material-ui/core';
import { BlogsContext } from '../../context/blogsContext/BlogContext';
import { postTypes } from '../../types/type';
import Post from '../post/Post';
import usePagination from '../../utility/Pagination';

type Props = {
  posts: postTypes[];
};

const Posts: React.FC = () => {
  const { posts } = useContext<Props | any>(BlogsContext);

  const [page, setPage] = useState(1);
  const PER_PAGE = 2;

  const count = Math.ceil(posts.length / PER_PAGE);
  const _DATA: any = usePagination(posts, PER_PAGE);

  const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    _DATA.jump(newPage);
  };

  return (
    <>
      <article>
        {_DATA?.currentData().map((post: postTypes) => (
          <Post key={post.title} post={post} />
        ))}
      </article>
      <Stack sx={{ my: 4, mx: 0, alignItems: 'center' }}>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default Posts;
