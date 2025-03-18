import { Link, useLocation } from "react-router-dom"
export default function Sidebar({links, close}) {
    const location = useLocation()
    return (
        <div className="sidebar" onClick={close}>
            { links.map(link => ( 
                <Link to={link.path} className={location.pathname === link.path ?
                 "sidebar-link active" : "sidebar-link" } key = {link.name}>
                    <img src = {link.icon} alt={link.name} className="icon-2000" />
                    {link.name}
                    </Link>
            ))}
        </div>
    )
}