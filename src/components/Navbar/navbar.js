import React from 'react';
import './navbar.css';

function Navbar() {
  return (
 <div className="color">

 <div class='background'>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://esseson.com/">ProjectX</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
            {/* <button type="button" class="btn btn-success ml-5">Home</button>

                {/* <a class="nav-link ml-5" href="https://esseson.com/">Home <span class="sr-only">(current)</span></a> */}
            {/* </li>
            <li class="nav-item active">
            <button type="button" class="btn btn-success ml-5">Today's Deals</button> */}

                {/* <a class="nav-link ml-5" href="https://esseson.com/">Today's Deals</a> */}
            {/* </li>
            <li class="nav-item active">
            <button type="button" class="btn btn-success ml-5">Trending</button> */}

                {/* <a class="nav-link ml-5" href="https://esseson.com/">Trending</a> */}
            </li>
            </ul> 
            <span class="navbar-text">
            <a class="nav-link" href="https://esseson.com/">Account</a>
            </span>
        </div>
        </nav>

        </div>
            
      
    </div>
  );
}

export default Navbar;