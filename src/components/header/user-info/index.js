import React from 'react';

import { Container } from './styles';

function UserInfo({logged,user}) {
  if(logged === true){
    return(
      <Container>
        <h3>Olá {user.nick}</h3>
      </Container>
    )
  }
  else{
    console.log("Olá, mundo!");
    return (
      <Container>
        <h3><a href="#">Login</a></h3>
      </Container>
    );
  }
}

export default UserInfo;