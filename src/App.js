import { Route, Switch } from 'react-router-dom';
import "./App.css";


import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CreateUserPage from './pages/CreateUserPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import CarouselPage from './pages/CarouselPage';
import YoutubePage from './videopage/youtubePage';
 

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <LandingPage className="page" />
        </Route>
        <Route path='/create-user' exact>
          <CreateUserPage className="page" />
        </Route>
        <Route path='/login'>
          <LoginPage className="page" />
        </Route>
        <Route path='/forgot-password'>
          <ForgotPasswordPage className="page" />
        </Route>
        <Route path='/carousel' exact>
          <CarouselPage className="page" />
        </Route>
        <Route path='/ytPage' exact>
          <YoutubePage className="page" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
