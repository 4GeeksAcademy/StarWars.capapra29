import React from "react"
import { Link } from "react-router-dom"

const Card = ({ id, name, imgURL }) => {
  return (
    <div>
      <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
        <img src={imgURL} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>

          <Link to={"/single/"+id} className="btn btn-primary float-start">More Info</Link>
          <button className="btn btn-warning float-end" ><i className="fa fa-heart"></i></button>
        </div>
      </div>
    </div>
  )
}
export default Card