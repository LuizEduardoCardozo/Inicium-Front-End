import React from 'react';

import NavMenu from './nav-menu';
import UserInfo from './user-info';

import { Container } from './styles';


function header(data) {
  return (
    <Container>
        <h1>Inicium</h1>
        <NavMenu />
        <UserInfo logged={false} data={data.user} />
    </Container>
  );
}

export default header;