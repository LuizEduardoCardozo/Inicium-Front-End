import React from 'react';

import NavMenu from './nav-menu';

import { Container } from './styles';

function header() {
  return (
    <Container>
        <h1>Inicium</h1>
        <NavMenu />
        <button>|||</button>
    </Container>
  );
}

export default header;