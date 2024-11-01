import React from "react"

const Card = ({ id, name, imgURL }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
        <img src={imgURL} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <a href="#" className="btn btn-primary float-start">More Info</a>
          <button className="btn btn-warning float-end" ><i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}
export default Card