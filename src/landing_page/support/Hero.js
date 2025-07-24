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
        <div className="input-group search-container">
            <span className="input-group-text bg-white border-end-0 pe-1">
                <i className="fas fa-search text-muted"></i>
            </span>
            <input
                type="text"
                className="form-control border-start-0 ps-2"
                placeholder="Search your issue..."
            />
        </div>
    </div>
</div>

<style>{`
    .search-container {
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    .search-container:focus-within {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .search-container .form-control {
        height: 50px;
        font-size: 0.9rem;
        border-radius: 0 8px 8px 0 !important;
    }
    
    .search-container .input-group-text {
        height: 50px;
        border-radius: 8px 0 0 8px !important;
    }
    
    .search-container .form-control:focus {
        box-shadow: none;
        border-color: #ced4da;
    }
    
    .search-container .form-control::placeholder {
        font-size: 0.85rem;
        color: #adb5bd;
    }
`}</style>
        </div>
    );
}

export default Hero;
