import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <FontAwesomeIcon icon={faEarthAmericas} className="icon-logo" />
        <p className="logo-title">My travel journal</p>
      </nav>
    </div>
  )
}
