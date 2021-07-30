import React from 'react';
import Post from '../post/Post';

const Posts: React.FC = () => {
  const featuredPosts = [
    {
      title: 'Title of a longer featured blog post',
      description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
      image: 'https://source.unsplash.com/random',
      imageText: 'main image description',
      linkText: ['React.js', 'Node.js'],
    },
    {
      title: 'Title of a longer featured blog post',
      description:
        'Pariatur sunt cillum exercitation magna eu culpa dolor pariatur mollit proident labore ipsum. Sunt labore laborum sint officia deserunt anim nisi Lorem laboris. Et voluptate elit deserunt esse eiusmod sint et exercitation excepteur consequat ea. Adipisicing irure consectetur pariatur ullamco consequat et aute mollit minim reprehenderit enim ad ullamco consectetur. Incididunt id nostrud pariatur officia id tempor. Dolor sunt pariatur quis elit ipsum est duis nostrud',
      image: 'https://source.unsplash.com/random',
      imageText: 'main image description',
      linkText: ['React.js', 'Node.js'],
    },
  ];
  return (
    <article>
      {featuredPosts.map(post => (
        <Post key={post.title} post={post} />
      ))}
    </article>
  );
};

export default Posts;
