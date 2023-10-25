import React from "react";

const CardComponent = ({ item, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100px",
        width: "200px",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <div>
        <h5 className="card-title">{item.description}</h5>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => onDelete(item.description)}
      >
        Delete
      </button>
    </div>
  );
};

export default CardComponent;
