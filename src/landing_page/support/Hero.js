import React from 'react';

function Hero() {
    return (
        <div className="container">
            {/* Heading & Button */}
            <div className="row align-items-center mt-5 mb-5 text-muted position-relative ">
                <div className="col-md-6">
                    <h1 className="fs-1">Support Portal</h1>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button
                        className="btn btn-primary px-4 py-2 d-flex align-items-center gap-2"
                        style={{ transition: 'background-color 0.3s ease' }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#343a40')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#0d6efd')}
                    >
                        <i className="fas fa-ticket-alt"></i>
                        My Ticket
                    </button>
                </div>
            </div>

            {/* Search Bar with Icon */}
            <div className="row mb-5 mt-5">
                <div className="col-12">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text bg-white">
                            <i className="fas fa-search text-muted"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search your issue here..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
