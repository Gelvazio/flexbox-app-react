import React from 'react';

import Header from './components/header';
import Routes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex h-full box-border mb-auto bg-gray-100'>
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
