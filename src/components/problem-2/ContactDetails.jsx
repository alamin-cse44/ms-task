import React from 'react';

const ContactDetails = ({handleDetailClose, id, country}) => {
    return (
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Contact Details</h5>
                <button
                  type="button"
                  // className="btn-close"
                  style={{backgroundColor: "#fff", border: "1px solid #46139f"}}
                  onClick={handleDetailClose}
                  // aria-label="Close"
                >Close</button>
              </div>
              <div className="modal-body border m-3">
                <h4>ID: {id}</h4>
                <h2>Country : {country}</h2>
              </div>
            </div>
          </div>
        </div>
    );
};

export default ContactDetails;