import React from 'react';

function Universe() {
    const partnerPlatforms = [
        {
            logo: "media/smallcaseLogo.png",
            description: "Thematic investing platform",
        },
        {
            logo: "media/streakLogo.png",
            description: "Algo & strategy platform",
        },
        {
            logo: "media/sensibullLogo.svg",
            description: "Options trading platform",
        },
        {
            logo: "media/zerodhaFundhouse.png",
            description: "Asset management",
        },
        {
            logo: "media/goldenpiLogo.png",
            description: "Bonds trading platform",
        },
        {
            logo: "media/dittoLogo.png",
            description: "Insurance",
        },
    ];

    return (
        <div className="container mt-5">
            <div className="text-center mb-5">
                <h1 className='text-muted fs-4'>The Zerodha Universe</h1>
                <p className='mt-3 text-muted fs-5 mb-5'>
                    Extend your trading and investment experience even further with our partner platforms
                </p>
            </div>

            <div className="row text-center">
                {partnerPlatforms.map((platform, index) => (
                    <div className="col-4 p-3 mt-4" key={index}>
                        <img
                            src={platform.logo}
                            alt={platform.description}
                            style={{ width: "120px", objectFit: "contain" }}
                        />
                        <p className="text-small text-muted mt-2">{platform.description}</p>
                    </div>
                ))}
                <button className='p-2 btn btn-primary fs-5 mb-5'  style={{ width: "20%", margin: "0 auto" }}>Signup now</button>
            </div>
        </div>
    );
}

export default Universe;
