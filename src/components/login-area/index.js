import React from 'react';

import { Container, Input, Button } from './styles';

function LoginArea() {
  return(
        <Container>
            <h1>Faça login!</h1>
            <Input/>       
            <Input/>
            <div>
                <Button>Login</Button>
                <Button>Cancel</Button>
            </div>
        </Container>
    );
}

export default LoginArea;