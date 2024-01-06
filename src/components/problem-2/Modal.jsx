import React, { useState } from "react";
import DisplayModal from "./DisplayModal";

const Modal = ({ handleClose, contacts, usa, show, setShow }) => {
  const [checks, setChecks] = useState(false);
  return (
    <div
      className="modal show"
      tabIndex="-1"
      role="dialog"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            {show === "all" ? (
              <h5 className="modal-title">All Contacts</h5>
            ) : (
              <h5 className="modal-title">US Contacts</h5>
            )}
            <button
              type="button"
              style={{ backgroundColor: "#fff", border: "1px solid #46139f" }}
              onClick={handleClose}
            >
              Close
            </button>
          </div>

          {/* All Contacts */}
          <div
            className={`overflow-auto ${show === "all" ? "d-block" : "d-none"}`}
          >
            <div
              className={`overflow-auto ${checks ? "d-none" : "d-block"}`}
              style={{ height: "450px" }}
            >
              {!checks &&
                show === "all" &&
                contacts.map((item, index) => (
                  <DisplayModal item={item} key={index} checks={checks} />
                ))}
            </div>

            <div
              className={`overflow-auto ${checks ? "d-block" : "d-none"}`}
              style={{ height: "450px" }}
            >
              {checks &&
                show === "all" &&
                contacts.map((item, index) => (
                  <DisplayModal item={item} key={index} checks={checks} />
                ))}
            </div>
          </div>

          {/* USA Contacts */}
          <div
            className={`overflow-auto ${show === "us" ? "d-block" : "d-none"}`}
          >
            <div
              className={`overflow-auto ${checks ? "d-none" : "d-block"}`}
              style={{ height: "450px" }}
            >
              {!checks &&
                show === "us" &&
                usa.map((item, index) => (
                  <DisplayModal item={item} key={index} checks={checks} />
                ))}
            </div>

            <div
              className={`overflow-auto ${checks ? "d-block" : "d-none"}`}
              style={{ height: "450px" }}
            >
              {checks &&
                show === "us" &&
                usa.map((item, index) => (
                  <DisplayModal item={item} key={index} checks={checks} />
                ))}
            </div>
          </div>

          <div className="m-2 d-flex justify-content-between">
            {!checks ? (
              <div className="form-check">
                <input
                  className={`form-check-input border border-primary`}
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onClick={() => setChecks(true)}
                />
                <div>
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Only even
                  </label>
                </div>
              </div>
            ) : (
              <div className="form-check">
                <input
                  className="form-check-input border border-primary"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onClick={() => setChecks(false)}
                  checked
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Only even
                </label>
              </div>
            )}

            <div>
              <button
                type="button"
                className="btn text-white me-2"
                style={{ backgroundColor: "#46139f" }}
                onClick={() => setShow("all")}
              >
                All Contacts
              </button>

              <button
                type="button"
                className="btn text-white"
                style={{ backgroundColor: "#ff7f50" }}
                onClick={() => setShow("us")}
              >
                Us Contacts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
