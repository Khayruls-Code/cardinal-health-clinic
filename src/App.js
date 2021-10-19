import './App.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Home/Footer/Footer';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound'
import Pricing from './Pages/Pricing/Pricing'
import Updates from './Pages/Home/Home/Updates/Updates';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/service/:serviceId'>
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path='/pricing'>
            <Pricing />
          </PrivateRoute>
          <PrivateRoute path='/updates'>
            <Updates />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
