import React from 'react'

const SCard2 = ({Id ,name, species, type, abilities}) => {
  return (
    <div class="container card bg-dark-blue ag-courses_item"
         style={{ height: "50%" ,width: "100%" }}>
      
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <img
        src={`/pokemons/${Id}.png`}
        alt={name}
        className="card-img-top"
        style={{ height: "50%" ,width: "100%" , bgcolor: "blue"}}
        />
        
          <span class="ag-courses-item_date">
            {Id}
          </span>
        

        <div class="ag-courses-item_title">
          {name}
        </div>

        <div class="ag-courses-item_title">
          {species}
        </div>

        <div class="ag-courses-item_title">
          {type}
        </div>

        <div class="ag-courses-item_title">
          Pokemon Type is {abilities}
        </div>

      </a>
      
    </div>
  )
}

export default SCard2