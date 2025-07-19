import React from 'react';

function Team() {
    return (
        <div>
            <div className="container">
                {/* Hero heading */}
                <div className="row mt-5 mb-5 border-top">
                    <div className="col-12 text-center mt-5">
                        <h1>People</h1>
                    </div>
                </div>

                {/* Info section */}
                <div className="row text-muted align-items-center">
                    {/* Image & name */}
                    <div className="col-md-6 text-center py-4">
                        <img
                            src="media/nithinKamath.jpg"
                            alt="Nithin Kamath"
                            style={{ borderRadius: "100%", width: "45%" }} // reduced from 60% to 40%
                        />

                        <h4 className="mt-3 mb-1">Nithin Kamath</h4>
                        <p className="text-muted" style={{ fontSize: "0.9rem", marginBottom: 0 }}>
                            Founder & CEO
                        </p>
                    </div>

                    {/* Description */}
                    <div className="col-md-6 py-4">
                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                        </p>
                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                        </p>
                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                            Playing basketball is his zen.
                        </p>
                        <p style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
  Connect on{" "}
                            <a href="" style={{ textDecoration: "none" }}>HomePage</a> /{" "}
                            <a href="" style={{ textDecoration: "none" }}>TradingQnA</a> /{" "}
                            <a href="" style={{ textDecoration: "none" }}>Twitter</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;

