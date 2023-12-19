import React from 'react';
import { useState } from 'react';
import Home from './Home';
import Resume from './Resume';
import Footer from './Footer';


const Main = () => {


  const [content, setContent] = useState("Home")

  const handleChange = (content) => {
    setContent(content)
  }

  const renderSection = () => {
    if (content === "Home") {
      return <Home />
    }else {
      return <Resume />
    }
  }


  return (
    <>
      {renderSection()}
      <Footer />
    </>
  )
};

export default Main;
