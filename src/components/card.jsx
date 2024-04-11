import React, { useState, useEffect } from 'react';
import ".././index.css"; // Assuming your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import BootstrapCSS
import data1 from './pokemon_full.json';
import PokeButton from './botton';

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
    <div className="container-fluid bg-black">
      <h1 className="text-center text-success"> 🦋POKEMONS🦋 </h1>

      {error ? (
        <p>Error fetching Pokemon data: {error.message}</p>
      ) : (
        <div className="row row-cols-1 row-cols-lg-3 g-3"> {/* Grid for responsive card layout */}
          {data.map((pokeObj) => (
            <div className="col" key={pokeObj.id}>
              <div className="blurred-image card bg-dark-blue">
                <div className="row "> {/* Row for image and description */}
                  <div className="col-md-4">
                    <img
                      src={`/pokemons/${pokeObj.id}.png`}
                      alt={pokeObj.name}
                      className="card-img-top"
                      style={{ width: "150%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="bold card-title">{pokeObj.name}</h2>
                      <p className="card-text">{pokeObj.species}</p>
                      {/* <p className="card-text">{pokeObj.abilities}</p>
                      <p className="card-text">{pokeObj.height}</p>
                      <p className="card-text">{pokeObj.weight}</p> */}
                    <div className='description' onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ opacity: isHovered ? 1.5 : 1 }}>
                    <h3 class="h5 text-center">{isHovered ? pokeObj.description : ''}</h3>
                    </div>
                    
                    
                    <table className="container-fluid table table-lg table-dark" style={{width:200}}>
                          <tbody>
                            <tr>
                              <th scope="row">Height</th>
                              <td>{pokeObj.height}</td>
                            </tr>
                            <tr>
                              <th scope="row">Weight</th>
                              <td>{pokeObj.weight}</td>
                            </tr>
                            <tr>
                              <th scope="row">Attack</th>
                              <td>{pokeObj.stats.attack}</td>
                            </tr>
                          </tbody>
                    </table>
                      <PokeButton pokeObject = {pokeObj.description}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;