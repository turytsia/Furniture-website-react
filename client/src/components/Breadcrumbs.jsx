import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
    const path = useLocation()
    
    return (
        <nav className="breadcrumbs">
            <div className="wrapper">
                <p className="breadcrumbs-path">Home{path.pathname}</p>
            </div>
        </nav>
    )
}
