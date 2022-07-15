// import { createRoute } from 'react-dom'
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBootstrap from './navbar';

// Import Bank App Components
import UserContext from './context';
import Home from './home';
import CreateAccount from './createaccount';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';


function BadBank() {
  return (
    <HashRouter>
      <NavBootstrap />
      <div className="container">
        <UserContext.Provider value={{
          users:[
            {firstName:'Tony', lastName:'Stark', email:'ironman@avengers.com', password:'freemoney', balance:100000, loggedIn:true},
            {firstName:'Peter', lastName:'Parker', email:'peter@nyu.edu', password:'spiderman', balance:100, loggedIn:false},
          ]
        }}>

          <Routes>
            <Route path='/'         exact element={<Home />} />
            <Route path='/createaccount/' element={<CreateAccount />} />
            <Route path='/login/'         element={<Login />} />
            <Route path='/deposit/'       element={<Deposit />} />
            <Route path='/withdraw/'      element={<Withdraw />} />
            <Route path='/alldata/'       element={<AllData />} />
          </Routes>

        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BadBank />);
export default BadBank;
