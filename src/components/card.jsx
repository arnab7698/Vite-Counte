import React, { useState, useEffect } from 'react';
import ".././index.css";
import data1 from './pokemon_full.json';

  function Card() {
    const url = "./pokemon_full.json";
    const [data, setData] = useState([]);

    const fetchInfo = async () => {
      try {
        setData(data1);
        console.log(data1);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }
  
  
    useEffect(() => {
      fetchInfo();
    }, []);

    const [favpoke, setFavpoke] = useState([])
    const addPoke = () => {
          setFavpoke(...favpoke, pokeObj.title)
    }
  
    return (

      
      <div className="container">
        <h1 className="text-center text-success" >🦋POKEMONS🦋</h1>
        <center>
          {data1.map((pokeObj) => {

            const [desc, setDesc] = useState('')

            const clickDesc = async () => {
                setDesc(pokeObj.description)
                console.log(desc);
            } 

            const [favpoke, setFavpoke] = useState([])
            const addPoke = async () => {
                  setFavpoke(...favpoke, pokeObj.title)
                  console.log(favpoke);
            }

            const [isHovered, setIsHovered] = useState(false);
            let poke = `/pokemons/${pokeObj.id}.png`;
            console.log(poke);
            return (
              <div
              className="col-md-4 mb-3"
              key={pokeObj.id}
              >
       
              <img src = {`/pokemons/${pokeObj.id}.png`} style = {{height: "150px", width: "150px"}} />  
                
                <h1>{pokeObj.name}</h1>
                <h1>{pokeObj.species}</h1>
                <div onTouchMoveCapture = { clickDesc }>{desc}</div>

                <div onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                     style={{ opacity: isHovered ? 1.5 : 1 }}>
                    <h3>{isHovered ? pokeObj.description : ''}</h3>
                    <h3>Attack is {pokeObj.stats.attack}</h3>

                    {/* <h3>Evolution of the Pokemon : {pokeObj.evolution[0]}</h3> */}
                    <button onClick = { addPoke }>🦧</button>
                </div>
              </div>
            );
          })}
        </center>
      </div>
    )}

export default Card;