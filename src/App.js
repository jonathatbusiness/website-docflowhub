import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Video from './components/Video';
import MensagemErro from './components/MensagemErro';

const App = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get("https://get.geojs.io/v1/ip/geo.json")
      .then(response => {
        setLocation(response.data);
      })
      .catch(error => {
        console.error("Erro ao verificar localização:", error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        {location ? (
          location.country === 'Brazil' || location.country === 'India' ? ( 
            <Route path="/" element={<MensagemErro />} />
          ) : (
            <Route path="/" element={<Video />} />
          )
        ) : (
          <Route path="/" element={<div>Carregando...</div>} />
        )}
      </Routes>
    </Router>
  );
}

export default App;