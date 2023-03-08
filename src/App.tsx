import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoute.tsx/AllRoutes';
import Main from './components/HomePage/Main';
import Route from './CollaborationProject/Main/main';
function App() {
  return (
    <div className="App">
        {/* <AllRoutes/>
        <Main/> */}
        <Route/>
    </div>
  );
}

export default App;
