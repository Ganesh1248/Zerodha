import React from 'react';

function Hero() {
    return ( 
        <div className="container text-center mt-5 mb-5 p-5 text-muted border-bottom"> 
            <h3>Zerodha Products</h3>
            <p className="text-muted mt-3 fs-5 mb-5">Sleek, modern, and intuitive trading platforms</p>
            <p className='mt-3'>Check out our <a href = '' style = {{textDecoration:"none"}}>investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
        </div>
     );
}

export default Hero;