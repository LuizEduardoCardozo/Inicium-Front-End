import React from 'react';

import { Container, Input, TextArea } from './styles';

import LoginArea from '../../login-area';

function Write() {
  return (
    <Container>
        <Input />
        <TextArea/>
        <div>
            <button> Publicar</button>
            <button> Cencelar</button>
            <LoginArea/>
        </div>
    </Container>
  );
}

export default Write;