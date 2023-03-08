import React from 'react';
import logo from './logo.svg';
import './App.css';
import AllRoutes from './components/AllRoute.tsx/AllRoutes';
import Main from './components/HomePage/Main';
function App() {
  return (
    <div className="App">
        <AllRoutes/>
        <Main/>
    </div>
  );
}

export default App;
