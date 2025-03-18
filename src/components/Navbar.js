import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./sidebar"

export default function Navbar({links}) {
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    function closeSidebar() {
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container"> 
                <Link to="/" className="logo">Epicurean E<span>cho</span> </Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? 
                            "sidebar-link active" : "" } to={link.path} 
                            key = {link.name}>{link.name}</Link> 
                    ))}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-bt active"
                    : "sidebar-bt"}> 
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showSidebar && <Sidebar close={closeSidebar}links = {links} />}
        </>
    )
}

