import GlobalStyles from './styles/global';
import { Container } from './styles';

/**
 * Routes
 */
import Routes from './routes';

function App() {
  return (
    <Container>
      <Routes />
      <GlobalStyles />
    </Container>
  );
}

export default App;
