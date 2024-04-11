// import React from "react";
// import ".././index.css";

// function NavbarCustom() {
//     return(
//         <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-gradient-primary w-100">
//             <div className="container-fluid">
//             <ul className="navbar-links">
//                 <li className="nav-item"><a href="#" className="navbar-brand text-white">Home</a></li>
//                 <li className="nav-item"><a href="#" className="navbar-brand text-white">Photos</a></li>
//                 <li className="nav-item"><a href="#" className="navbar-brand text-white">Videos</a></li>
//                 <li className="nav-item"><a href="#" className="navbar-brand text-white">Contact Us</a></li>
//             </ul>
//             </div>
//         </nav>
//     )
// }

// export default NavbarCustom


import React from "react";
import ".././index.css";
import "bootstrap/dist/css/bootstrap.min.css";  // Import BootstrapCSS

function NavbarCustom() {
  return (
    <nav className="nav navbar-right navbar-expand-lg fixed-top navbar-dark bg-gradient-primary" style = {{float:'right', justifyContent:"flex-end"}}> {/* Added Bootstrap classes */}
      <div className="container-fluid-xxl">  {/* Wrap in container-fluid for full width */}
        {/* <a href="#" className="navbar-brand text-white">Your Awesome Website</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* ml-auto: margin-left: auto */}
            <li className="nav-item">
              <a href="#" className="nav-link active text-white">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-blue">
                Photos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-blue">
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-blue">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarCustom;
