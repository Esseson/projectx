import React from 'react';
import Carousel from'./carousel';
import './slider.css';



function sliders(){
    return(

<div className='slider position-center pl-5 pb-5 pr-5'>
                    <div class='pt-5 mt-5 mb-5'>
                    </div>
                 <div></div>

                 <div class='carol d-flex pb-5 pt-5'>
                    <Carousel/>

                    <div class='ml-5'>
                    <Carousel />
                    </div>

                    <div class='ml-5'>
                    <Carousel />
                    </div>


                    </div>


                

 </div>



    );


}

export default sliders;