import React from 'react'
import { UsersArrayProps } from "../../data/data";

function CardAccepted({id, image, type, name, address, phone, from, to, hours, decription,  onClickDelete}:UsersArrayProps) {
  return (
    <div
    key={id}
    className="col-11 col-md-5 col-lg-3 card h-100 p-0 postUsers me-md-4 mb-4 cardUsers "
  >
    <img
      src={"." + image}
      alt=""
      className="img-fluid h-100 w-100"
    />

    <div className="card-body">
      <h3 className="card-title text-center">
        {type}
      </h3>
      <p className="card-text">
        <strong>Name: </strong>
        {name}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>from:</strong> {from}{" "}
        <strong>to:</strong> {to}
      </p>
      <p>
        <strong>Available: </strong>
        {hours} h
      </p>
      <p>
        <strong>Decription: </strong>
        {decription}
      </p>
      <div className="d-grid">
      <button  onClick={onClickDelete ? () => onClickDelete() : undefined}className="delete-btn border-0 rounded-1 p-1 custom-bg-color-02 ">Delete</button>
      </div>
    </div>
  </div>
  )
}

export default CardAccepted