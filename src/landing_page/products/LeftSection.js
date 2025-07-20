import React from 'react';

function LeftSection({imageUrl, productName,productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 ">
                    <img src={imageUrl}  />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h2 className='text-muted fs-3'>{productName}</h2>
                    <p className='mt-5'>{productDescription}</p>
                   <div style={{ marginBottom: '5px' }}>
                        <a
                            href={tryDemo}
                            style={{ textDecoration: 'none' }}
                        >
                            Try Demo <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a
                            href={learnMore}
                            style={{ marginLeft: '50px', textDecoration: 'none' }}
                        >
                            Learn More <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                   </div>

                    
                    <div className="mt-3">
                        <a href={googlePlay}><img src ="media/googlePlayBadge.svg"/></a>
                        <a href={appStore} style={{ marginLeft: '50px' }}><img src ="media/appStoreBadge.svg"/></a>
                    </div>
                    

                    

                </div>
            </div>
        </div>
     );
}

export default LeftSection;