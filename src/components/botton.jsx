import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Fade from 'react-bootstrap/Fade';
import data1 from './pokemon_full.json';
import Spinner from 'react-bootstrap/Spinner'

function PokeButton({pokeObject}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(data1); // Assuming data1 contains valid Pokemon data
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Button 
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
      >
        <Spinner animation="border" />
        <Spinner animation="grow" />
        <Spinner animation="border" />
      </Button>
      
      <Fade in={open}>
        <div className = "bold" id="example-fade-text" style={{width : "100%"}}>
          {pokeObject}
        </div>
      </Fade>
    </>
  );
}

export default PokeButton;