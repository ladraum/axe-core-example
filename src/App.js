import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto 1rem;
  border: 0.0625rem solid black;
  padding: 2rem;
  width: 16rem;

  input, button {
    width: 100%;
  }

  img {
    margin: auto;
  }
`;

const Row = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin-top: 2rem;
`;

const Title = styled.h1`
  text-align: center;
`;

const Link = styled.a`
  font-size: 0.75rem;
  color: grey;
`;

function App() {
  return (
    <Card role="main">
      <Row>
        <img src="https://res.cloudinary.com/rangle/image/upload/c_scale,co_rgb:262626,e_colorize:100,f_png/rangle.io/rangle-logo-wordmark_mmkalz.svg" />
      </Row>
      <Row>
        <Title>Welcome to Amazing App:</Title>
      </Row>
      <Row>
        Login
      </Row>
      <Row>
        <input type="text" />
      </Row>
      <Row>
        Password
      </Row>
      <Row>
        <input type="password" />
      </Row>
      <Row>
        <Link href="https://rangle.io">Forgot password?</Link>
      </Row>
      <Row>
        <Button>Log in</Button>
      </Row>
    </Card>
  );
}

export default App;
