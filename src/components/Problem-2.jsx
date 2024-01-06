import React, { useState } from "react";
import Modal from "./problem-2/Modal";

const Problem2 = ({contacts, usa}) => {
  const [show, setShow] = useState("all");
  const [showModal, setShowModal] = useState(false);

  const handleShow = (data) => {
    setShowModal(true);
    setShow(data);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container test">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-3</h4>

        <div className="d-flex justify-content-center gap-3">
          <div>
            <button
              type="button"
              className="btn text-white"
              style={{ backgroundColor: "#46139f" }}
              onClick={() => handleShow("all")}
            >
              All Contacts
            </button>

            {showModal && show === "all" && (
              <Modal
                handleClose={handleClose}
                contacts={contacts}
                usa={usa}
                show={show}
                setShow={setShow}
              />
            )}
          </div>

          <div>
            <button
              type="button"
              className="btn text-white"
              style={{ backgroundColor: "#ff7f50" }}
              onClick={() => handleShow("us")}
            >
              US Contacts
            </button>

            {showModal && show === "us" && (
              <Modal
                handleClose={handleClose}
                contacts={contacts}
                usa={usa}
                show={show}
                setShow={setShow}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
