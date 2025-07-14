import React from 'react';


function Stats() {
    return ( 
        <div className = 'container p-5'>
            <div className = 'row p-5'>
                <div className = 'col-6 p-5'>
                    <h1 className = 'fs-2'>Trust with confidence</h1>
                    <h2 className = 'fs-4'>Customer-first always</h2>
                    <p className = 'text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equity investments.</p>
                    
                    <h2 className = 'fs-4'>Customer-first always</h2>
                    <p className = 'text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equity investments.</p>
                    
                    <h2 className = 'fs-4'>Customer-first always</h2>
                    <p className = 'text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equity investments.</p>
                    <h2 className = 'fs-4'>Customer-first always</h2>
                    <p className = 'text-muted'>That's why 1.3+ crore customers trust Zerodha with $3.5+ lakh crores worth of equity investments.</p>
                </div>
                <div className = 'col-6 p-5'>
                    <img src = 'media/ecosystem.png' style={{width:"90%"}}/>
                    <div className = 'text-center'>
                        <a href = '' className = 'mx-5' style = {{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>

                        <a href = '' style = {{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>


                    </div>
                </div>

            </div>

        </div>
     );
}

export default Stats;