import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/home-page/Home';
import { Navigation } from './components/navigation/Navigation';
import { Catalog } from './components/catalog-page/Catalog';
import { Login } from './components/login-page/Login';
import { Register } from './components/register-page/Register';
import { Details } from './components/details-page/Details';
import { Profile } from './components/profile-page/Profile';
import { Edit } from './components/edit-page/Edit';
import AuthGards from './util/AuthGards';
import RouteGards from './util/RouteGards';




function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<AuthGards><Login /></AuthGards>} />
        <Route path='/register' element={<AuthGards><Register /></AuthGards>} />
        <Route path='/profile' element={<RouteGards><Profile /></RouteGards>} />
        <Route path='/catalog/users' element={<Catalog />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/edit/:id' element={<RouteGards><Edit /></RouteGards>} />
      </Routes>
    </>
  );
}

export default App;
