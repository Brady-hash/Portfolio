// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />  {/* This will render the component based on the route */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
