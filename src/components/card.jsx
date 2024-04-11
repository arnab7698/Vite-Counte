import React, { useState, useEffect } from 'react';
import ".././index.css"; // Assuming your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import BootstrapCSS
import data1 from './pokemon_full.json';
import PokeButton from './botton';
import DynamicForm from './forms';
import Example from './encryptbutton.jsx';
import { FaBeer } from "react-icons/fa";  
import SCard2 from './card2.jsx';

function Card() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

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

  const handleDescriptionHover = () => {
    setIsHovered(!isHovered);
  };

  const addToFavorites = (pokemon) => {
    // Implement logic to add Pokemon to favorites (e.g., update separate state or store in local storage)
  };

  return (
    <div class="ag-format-container">
    <div className="container-fluid bg-black">
      

      {error ? (
        <p>Error fetching Pokemon data: {error.message}</p>
      ) : (
        <div className="row row-cols-2 row-cols-lg-3 g-2"> {/* Grid for responsive card layout */}
          {data.map((pokeObj) => (
            <div className="col" key={pokeObj.id}>
              <div className="blurred-image card bg-dark-blue">
              <DynamicForm />
              <Example />
              <FaBeer />
                <SCard2 Id = {pokeObj.id} name = {pokeObj.name} species = {pokeObj.species} type = {pokeObj.type} abilities = {pokeObj.abilities} />
                <div className="row "> {/* Row for image and description */}
                    <PokeButton pokeObject = {pokeObj.description}/>
                  <div className="col-md-4">
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      
                    {/* <div className='description' onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ opacity: isHovered ? 1.5 : 1 }}>
                    <h3 class="h5 text-center">{isHovered ? pokeObj.description : ''}</h3>
                    </div> */} 
                                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Card;