import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={props.imageUrl} alt="" />
      <div className="spot">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        <p className="location-title">{props.location}</p>
        <a className="location-btn" href={props.googleMapsUrl}>
          View on Google Maps
        </a>
      </div>
      <h1 className="title">{props.title}</h1>
      <p className="date">
        {props.startDate} - {props.endDate}
      </p>
      <p className="text">{props.description}</p>
    </div>
  )
}
