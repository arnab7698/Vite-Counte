import React from 'react'
import ReactDOM from 'react-dom/client'
import AbdoolCounter from './App.jsx'
import './index.css'
import IconSideNav from './components/navbar.jsx'
import Card from './components/card.jsx'
import './Bootstrap/bootstrap-5.3.3-dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IconSideNav />
    <div style={{ display: "flex", flexWrap: "wrap" }}>
    <h1 class="h1 text-center" id="pageHeaderTitle">🦋POKEMONS🦋</h1>
    </div>

    <div style={{ display: "flex", flexWrap: "wrap-reverse" }}>
        
        <Card name="Julien Pratap" defn='Acchi ladki hay' style={{ display: 'centre' }} /><br/>
        
        {/* <Card name="Baban Pratap" defn='Ye uski Bap hai' style={{ display: 'inline-block' }} /> */}

        {/* <AbdoolCounter style={{ display: 'inline-block' }} /> */}
        
    </div>
  </React.StrictMode>
)
