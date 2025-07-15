import React from 'react';

function Education() {
    return ( 
        <div className = 'container'>
            <div className = 'row'>
                <div className = 'col-6'>
                   <img src = 'media/education.svg' style ={{width:"70%"}}></img>
                </div>

                <div className = 'col-6 mt-5 p-1'>
                    <h1 className = 'mb-3 '>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the worls covering everything from the basics to advance trading.</p>
                    <a href = '' style = {{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className = 'mt-5'>TradingQ&A, the most active trading and investment community in India for all your market realted helps</p>
                    <a href = '' style = {{textDecoration:"none"}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>

        </div>
     );
}

export default Education;