import { lightTheme } from 'amazon-chime-sdk-component-library-react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SimpleApp from './pages/SimpleApp';
import Menu from './pages/Menu';
import routes from './constants/routes';


const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <Router>
      <Switch>
        <Route exact path={routes.HOME} component={Menu} />
        <Route path={routes.SIMPLE_APP} component={SimpleApp} />
      </Switch>
    </Router >
  </ThemeProvider>
);

export default App;
