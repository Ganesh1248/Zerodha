import React, { useState } from 'react';

function CreateTicket() {
    return (
        <div className="container mt-5">
            <div className="row">
                {/* Left Column: Dropdowns */}
                <div className="col-md-6 dropdown-column">
                    <DropdownSection title="Account Opening" iconClass="fas fa-user-circle" />
                    <DropdownSection title="Your Zerodha Account" iconClass="fas fa-id-card" />
                    <DropdownSection title="Kite" iconClass="fas fa-paper-plane" />
                    <DropdownSection title="Funds" iconClass="fas fa-wallet" />
                    <DropdownSection title="Console" iconClass="fas fa-chart-bar" />
                    <DropdownSection title="Coin" iconClass="fas fa-coins" />
                </div>

                {/* Spacer Column */}
                <div className="col-md-2"></div>

                {/* Right Column: Helpful Links */}
                <div className="col-md-4">
                    <h3 className="text-muted mb-3">Quick links</h3>
                    
                        <li className="list-group-item border-0 ps-0 mb-3">
                            <a href="#" className="text-primary text-decoration-none link-hover">1 . Track account opening</a>
                        </li>
                        <li className="list-group-item border-0 ps-0 mb-3">
                            <a href="#" className="text-primary text-decoration-none link-hover">2 . Track segment activation</a>
                        </li>
                        <li className="list-group-item border-0 ps-0 mb-3">
                            <a href="#" className="text-primary text-decoration-none link-hover">3 . Intraday margin</a>
                        </li>
                        <li className="list-group-item border-0 ps-0 mb-3">
                            <a href="#" className="text-primary text-decoration-none link-hover">4 . Kite user manual</a>
                        </li>
                        <li className="list-group-item border-0 ps-0 mb-3">
                            <a href="#" className="text-primary text-decoration-none link-hover">5 . Track segment</a>
                        </li>
                    
                </div>
            </div>

            {/* Custom CSS */}
            <style>{`
                .dropdown-column .dropdown-section {
                    margin-bottom: 1.5rem;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .dropdown-column .dropdown-section.expanded {
                    margin-bottom: 2.5rem;
                }

                .dropdown-toggle {
                    border: none !important;
                    background: none !important;
                    padding: 0.75rem 1.5rem;
                    font-size: 1rem;
                    color: #6c757d;
                    transition: all 0.3s ease;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 8px !important;
                }

                .dropdown-toggle:hover {
                    background-color: #f8f9fa;
                    color: #343a40;
                }

                .dropdown-toggle i:first-child {
                    color: #0d6efd;
                    margin-right: 15px;
                    width: 20px;
                    text-align: center;
                }

                .dropdown-toggle::after {
                    display: none !important;
                }

                .dropdown-caret {
                    transition: transform 0.3s ease;
                    color: #6c757d;
                    font-size: 0.9rem;
                }

                .dropdown-section.expanded .dropdown-caret {
                    transform: rotate(180deg);
                }

                .dropdown-menu {
                    position: relative !important;
                    transform: none !important;
                    width: calc(100% - 3rem) !important;
                    margin-left: 1.5rem;
                    display: block;
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                    border: none;
                    box-shadow: none;
                    padding: 0;
                    background: transparent;
                }

                .dropdown-menu.show {
                    max-height: 500px;
                    opacity: 1;
                    padding: 0.5rem 0;
                }

                .dropdown-menu li {
                    margin: 0.5rem 0;
                    padding: 0.5rem 1rem;
                    transition: all 0.3s ease;
                    transform: translateY(-10px);
                    opacity: 0;
                    border-radius: 6px;
                    background-color: #f8f9fa;
                }

                .dropdown-menu.show li {
                    transform: translateY(0);
                    opacity: 1;
                    transition-delay: calc(var(--i) * 0.1s);
                }

                .dropdown-menu li:hover {
                    background-color: #e9ecef;
                }

                .dropdown-item {
                    color: #0d6efd;
                    transition: color 0.2s ease;
                    padding: 0.5rem 1rem;
                    display: block;
                    text-decoration: none;
                    font-size: 0.95rem;
                }

                .dropdown-item:hover {
                    color: #6c757d;
                    background-color: transparent;
                }

                .link-hover:hover {
                    color: #6c757d !important;
                }
            `}</style>
        </div>
    );
}

const DropdownSection = ({ title, iconClass }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const dropdownItems = [
        "Account opening status",
        "Document submission",
        "KYC verification",
        "Bank account linking",
        "Activation request"
    ];

    return (
        <div className={`dropdown dropdown-section ${isOpen ? 'expanded' : ''}`}>
            <button
                className="btn w-100 text-start dropdown-toggle d-flex align-items-center justify-content-between"
                type="button"
                onClick={toggleDropdown}
                aria-expanded={isOpen}
            >
                <div className="d-flex align-items-center">
                    <i className={`${iconClass} me-3`}></i> 
                    <span>{title}</span>
                </div>
                <i className="fa-solid fa-caret-down dropdown-caret"></i>
            </button>
            <ul className={`dropdown-menu w-100 ${isOpen ? 'show' : ''}`}>
                {dropdownItems.map((item, index) => (
                    <li key={index} style={{ '--i': index }}>
                        <a className="dropdown-item" href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CreateTicket; 


