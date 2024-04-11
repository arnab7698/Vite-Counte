import React from 'react'

const SCard2 = ({Id ,name, species, type, abilities}) => {
  return (
    <div class="card bg-dark-blue ag-courses_item">
      
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>
        <img
        src={`/pokemons/${Id}.png`}
        alt={name}
        className="card-img-top"
        style={{ width: "100%" }}
      />
        
          <span class="ag-courses-item_date">
            {Id}
          </span>
        

        <div class="ag-courses-item_title">
          Name is {name}
        </div>

        <div class="ag-courses-item_title">
          Species is {species}
        </div>

        <div class="ag-courses-item_title">
          Pokemon Type is {type}
        </div>

        <div class="ag-courses-item_title">
          Pokemon Type is {abilities}
        </div>

      </a>
      
    </div>
  )
}

export default SCard2