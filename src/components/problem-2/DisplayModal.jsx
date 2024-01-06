
const DisplayModal = ({ item, checks }) => {
  return (
    <>
      <div
        className="border-0 m-3"
        style={{ width: "90%", cursor: "pointer" }}
      >
        {!checks && (
          <div className="modal-body border">
            <h2>Id : {item.id}</h2>
            <h4>{item.country.name}</h4>
            <p>Phone: {item.phone}</p>
          </div>
        )}
        {checks && (
          <div className={`${checks ? "d-block" : "d-none"}`}>
            {item.id % 2 == 0 && (
              <div className="modal-body border">
                <div>
                  <h2>Id : {item.id}</h2>
                  <h4>{item.country.name}</h4>
                  <p>Phone: {item.phone}</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
    </>
  );
};

export default DisplayModal;
