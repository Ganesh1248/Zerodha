import React from 'react';

function RightSection({ imageUrl, productName, productDescription, learnMore }) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5">
                    <h2 className="text-muted fs-3">{productName}</h2>
                    <p className="mt-5">{productDescription}</p>

                    <div style={{ marginBottom: '5px' }}>
                       

                        <a
                            href={learnMore}
                            style={{ textDecoration: 'none' }}
                        >
                            {learnMore} <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>

                <div className="col-6">
                    <img src={imageUrl} alt="Product visual" style={{ maxWidth: '100%', borderRadius: '8px' }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
