import React, { useState } from "react";

const Problem1 = () => {
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState("all");

  const handleNameChange = (e) => {
    setName(e.target.value);
    // console.log("name ", name)
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    // console.log("name ", status)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData([...formData, { name, status }]);
    console.log("Form data ", formData);

    // Clear the input fields
    setName("");
    setStatus("");
  };

  const handleClick = (val) => {
    setShow(val);
  };

  const filterData = () => {
    let filteredData;

    if (show === "all") {
      // Sort data based on the order: active, completed, pending, archive
      filteredData = formData.sort((a, b) => {
        const order = ["active", "completed", "pending", "archive"];
        return order.indexOf(a.status) - order.indexOf(b.status);
      });
    } else if (show === "active" || show === "completed") {
      filteredData = formData.filter((item) => item.status === show);
    } else {
      // Show pending and archive below all other statuses
      filteredData = formData.filter(
        (item) => item.status !== "active" && item.status !== "completed"
      );
    }

    return filteredData;
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleNameChange}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                name="status"
                value={formData.name}
                onChange={handleStatusChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filterData().map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
