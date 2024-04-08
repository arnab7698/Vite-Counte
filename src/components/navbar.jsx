// import React from "react";
// import ".././index.css";

// function NavbarCustom() {
//     return(
//         <nav className="navbar">
//             <ul className="navbar-links">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">Photos</a></li>
//                 <li><a href="#">Videos</a></li>
//                 <li><a href="#">Contact Us</a></li>
//             </ul>
//         </nav>
//     )
// }

// export default NavbarCustom

import React from "react";
import ".././index.css";

// function NavbarCustom() {
//   return (
//     <navbar className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top-right">

//       <a className="navbar-brand" href="#">Pokemon Website</a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav ml-auto"> {/* ml-auto: margin-left: auto */}
//           <li className="nav-item">
//             <a href="#" className="nav-link active">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">
//               Photos
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">
//               Videos
//             </a>
//           </li>
//           <li className="nav-item">
//             <a href="#" className="nav-link">
//               Contact Us
//             </a>
//           </li>
//         </ul>
//       </div>
//     </navbar>
//   );
// }

// export default NavbarCustom;


function NavbarCustom() {
  return (
<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">Navbar</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">Search for a Pokemon</input>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
  )}

export default NavbarCustom;
