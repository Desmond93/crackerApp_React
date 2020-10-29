import React from 'react';
import './App.css';
import FirstSection from './Components/FirstSection/FirstSection';
import OrderInfoContainer from './Components/OrderInfo/OrderInfoContainer';
import Footer from './Components/Footer/Footer';
import SecondSectionContainer from './Components/SecondSection/SecondSectionContainer';

function App() {
  return (
    <div className="App">
      <OrderInfoContainer />
      <FirstSection />
      <SecondSectionContainer />
      <Footer />
    </div>
  );
}

export default App;
