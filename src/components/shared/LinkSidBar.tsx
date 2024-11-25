import { INavLink } from "@/types"
import {  NavLink, useLocation } from "react-router-dom"

const LinkSidBar = ({ imageUrl, route, label }: INavLink) => {
    const {pathname} = useLocation();
    const isActive = pathname === route;
    return (
        <li className={`leftSideBar_link group ${isActive && "bg-primary-500"}`}>

        <NavLink to={route} className='flex gap-4 items-center p-4'>
            <img src={imageUrl} alt={label} className={`group-hover:invert-white ${isActive && 'invert-white'}`}/>
            <h3>{label}</h3>
        </NavLink>
        </li>
    )
}

export default LinkSidBar

