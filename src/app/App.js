import React from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Home } from '../pages/home';
import './App.css';

function App() {
  return (
    <> 
    <Header/>
    <div className="App">
      <Home/>
    </div>
    <Footer/>
  </>
   
  );
}

export default App;
