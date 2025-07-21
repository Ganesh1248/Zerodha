import React from 'react';

function Brokerage() {
    // All custom CSS is defined here. The table now features
    // thin, faded borders for a cleaner look.
    const styles = `
        .brokerage-container {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f8f9fa;
        }

        /* Table Styling with Faded Borders */
        .brokerage-table {
            border-collapse: separate; /* Required for modern border styling */
            border-spacing: 0;
        }

        .brokerage-table th {
            font-weight: 600;
            transition: color 0.2s ease-in-out;
        }

        .brokerage-table th:hover {
            color: #0d6efd; /* Bootstrap primary blue */
        }
        
        .brokerage-table td, .brokerage-table th {
             border-bottom: 1px solid rgba(0, 0, 0, 0.075); /* Thin, faded border */
        }
        
        .brokerage-table tbody tr:last-child td {
            border-bottom: none; /* Remove border from the last row for a clean finish */
        }

        /* Card Styling */
        .professional-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-radius: 12px;
            border: 1px solid #e9ecef;
        }

        .professional-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }
        
        .professional-card .card-header {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
        }
    `;

    return (
        <div className="brokerage-container mt-5 p-3 p-md-5">
            <style>{styles}</style>
            
            

            {/* Equity Section */}
            <div className="mb-5">
                <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-circle me-3" style={{width: '12px', height: '12px'}}></div>
                    <h3 className="text-dark mb-0">Equity Trading</h3>
                </div>
                <div className="table-responsive">
                    <table className="table align-middle brokerage-table">
                        <thead className="table-light">
                            <tr>
                                <th className="py-3 ps-4">Segment</th>
                                <th className="py-3">Brokerage</th>
                                <th className="py-3 pe-4">Taxes & Other Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ps-4 py-3 fw-medium">Delivery</td>
                                <td className="py-3 text-success fw-medium">Zero brokerage</td>
                                <td className="pe-4 py-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">STT</span><span>0.1% on buy & sell</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Transaction charges</span><span>NSE: 0.00297%, BSE: 0.00375%</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">GST</span><span>18% on (brokerage + transaction + SEBI)</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">SEBI charges</span><span>₹10/crore</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Stamp duty</span><span>0.015% or ₹1500/crore on buy</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="ps-4 py-3 fw-medium">Intraday</td>
                                <td className="py-3 fw-medium">0.03% or ₹20/executed order</td>
                                <td className="pe-4 py-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">STT</span><span>0.025% on sell side</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Transaction charges</span><span>NSE: 0.00297%, BSE: 0.00375%</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">GST</span><span>18% on (brokerage + transaction + SEBI)</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">SEBI charges</span><span>₹10/crore</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Stamp duty</span><span>0.003% or ₹300/crore on buy</span></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Futures & Options Section */}
            <div className="mb-5">
                <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded-circle me-3" style={{width: '12px', height: '12px'}}></div>
                    <h3 className="text-dark mb-0">Futures & Options</h3>
                </div>
                <div className="table-responsive">
                    <table className="table align-middle brokerage-table">
                        <thead className="table-light">
                            <tr>
                                <th className="py-3 ps-4">Segment</th>
                                <th className="py-3">Brokerage</th>
                                <th className="py-3 pe-4">Taxes & Other Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="ps-4 py-3 fw-medium">Futures</td>
                                <td className="py-3 fw-medium">0.03% or ₹20/executed order</td>
                                <td className="pe-4 py-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">CTT</span><span>0.02% on sell side</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Transaction charges</span><span>NSE: 0.00173%</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">GST</span><span>18% on (brokerage + transaction + SEBI)</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">SEBI charges</span><span>₹10/crore</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Stamp duty</span><span>0.002% or ₹200/crore on buy</span></li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td className="ps-4 py-3 fw-medium">Options</td>
                                <td className="py-3 fw-medium">Flat ₹20/executed order</td>
                                <td className="pe-4 py-3">
                                    <ul className="list-unstyled mb-0">
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">STT</span><span>0.125% intrinsic, 0.1% on premium</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Transaction charges</span><span>NSE: 0.03503%, BSE: 0.0325%</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">GST</span><span>18% on (brokerage + transaction + SEBI)</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">SEBI charges</span><span>₹10/crore</span></li>
                                        <li className="py-1 d-flex justify-content-between"><span className="text-muted">Stamp duty</span><span>0.003% or ₹300/crore on buy</span></li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Charges Sections */}
            <div className="row mb-5 g-4">
                <div className="col-lg-6">
                    <div className="card h-100 shadow-sm professional-card">
                        <div className="card-header bg-white border-bottom-0 py-3"><h5 className="mb-0 text-dark">Account Charges</h5></div>
                        <div className="card-body pt-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">Online account opening</span><span className="badge bg-success bg-opacity-10 text-success">Free</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">NRI account (offline)</span><span>₹500</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">Corporate/Partnership/HUF</span><span>₹500</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">Demat AMC</span><span>₹300/year + GST (non-BSDA)</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card h-100 shadow-sm professional-card">
                        <div className="card-header bg-white border-bottom-0 py-3"><h5 className="mb-0 text-dark">Other Charges</h5></div>
                        <div className="card-body pt-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">Call & Trade</span><span>₹50/order</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">MTF Interest</span><span>0.04% per day</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">DP Charges</span><span>₹15.34/scrip on sell</span></li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 py-2 px-0"><span className="text-muted">Off-market transfer</span><span>₹25/transaction</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-light rounded p-4">
                <div className="d-flex">
                    <div className="flex-shrink-0 text-primary me-3"><i className="bi bi-info-circle-fill fs-5"></i></div>
                    <div>
                        <p className="mb-0 text-muted">
                            <strong className="text-dark">Note:</strong> All statutory charges (STT/CTT, GST, SEBI, stamp duty, etc.) are levied by respective authorities and may change as per regulations. These charges are over and above the brokerage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
