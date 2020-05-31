import React from 'react';

import Post from '../post';

import { Container } from './styles';

function MainContent({data}) {
  return( 
    <Container>
        {data.posts.map(post => <Post key={post.id} post={post}/>)}
    </Container>
  );
}

export default MainContent;