import React from 'react';



function carousel(){
    return(

        <div class="card pointer" style={{ width:"20rem", height:'12rem', display:"inline-block", padding:"10px 10px" }} pl-5>
        <div class="card-body">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://d3n8a8pro7vhmx.cloudfront.net/sodiumbreakup/pages/1329/attachments/original/1497557655/Avocados1.jpg?1497557655" class="d-block w-100" alt="House Obj"/>
                <div class="carousel-caption">
                <h5>Best Avocados</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://www.news-medical.net/image.axd?picture=2018%2F10%2FBy_Alexander_Chaikin.jpg" class="d-block w-100" alt="house Obj"/>
                <div class="carousel-caption">
                <h5>Fresh CowMilk</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://emerging-europe.com/wp-content/uploads/2018/02/bigstock-191308495-990x556.jpg" class="d-block w-100" alt="house obj"/>
                <div class="carousel-caption">
                <h5>Steak</h5>
                </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
      </div>
      
);

}

export default carousel;