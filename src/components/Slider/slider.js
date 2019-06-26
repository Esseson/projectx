import React from 'react';



function Slider() {
  return (
      
 <div class="slider">

        <div id="demo" class="carousel slide" data-ride="carousel">

        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Pineapples_for_sale_in_Bolgatanga%2C_Upper_East_Region%2C_Ghana.JPG" alt="Los Angeles" width="1100" height="500" />
          </div>
          <div class="carousel-item">
            <img src="https://previews.123rf.com/images/yellowcrest/yellowcrest1511/yellowcrest151100007/60321931-south-indian-banana-variety.jpg" alt="Chicago" width="1100" height="500" />
          </div>
          <div class="carousel-item">
            <img src="https://previews.123rf.com/images/steffenwendt/steffenwendt1703/steffenwendt170300015/75840292-crate-with-potatoes-for-sale-on-farmers-market.jpg" alt="New York" width="1100" height="500" />
                <div class="carousel-caption">
              <h3>Get Fresh Potatoes</h3>
            <p>At affordable rates from farmers</p>
                </div>
          </div>
        </div>

        <a class="carousel-control-prev" href="#demo" data-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#demo" data-slide="next">
          <span class="carousel-control-next-icon"></span>
        </a>
        </div>



    
      
</div>
  );
}

export default Slider;