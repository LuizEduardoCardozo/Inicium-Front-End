import React from 'react';

import { Container, Article } from './styles';

function Post({post}) {
  return (
    <Container>
        <Article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <h3>{post.author}</h3>
        </Article>
    </Container>
  );
}

export default Post;