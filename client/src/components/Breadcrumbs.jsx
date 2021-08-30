import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Breadcrumbs() {
    let path = useLocation().pathname
    path = path.split('/')
    path = path.filter(location => location)

    return (
        path.length>0 && <nav className="breadcrumbs">
            <div className="wrapper">
                <p className="breadcrumbs-path">
                    <Link to={''}>Home / </Link>
                    {path.map((location, i) => <Link key={i} to={`${location}`}>{location[0].toUpperCase() + location.slice(1)} / </Link>)}
                </p>
            </div>
        </nav>
    )
}
