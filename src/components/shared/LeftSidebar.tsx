import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { sidebarLinks } from "@/constants"
import LinkSidBar from "./LinkSidBar"


const LeftSidebar = () => {
  return (
    <nav className="leftSideBar">
      <div className="flex flex-col gap-11">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={170}
          />
        </Link>

        <Link to='' className="flex gap-3">
          <img src="/assets/images/profile.svg" alt='profile'
            className="size-8 rounded-full" />

          <div className="flex flex-col">
            <p className="body-bold">
              {/* {user.name} */}
              somaya adel
            </p>
            <p className="small-regular text-light-3">
              {/* @{user.username} */}
              @somayaAdel
            </p>
          </div>
        </Link>

        {/* links  */}
        <ul className="flex flex-col gap-6">
          {sidebarLinks.map((el, i) => {
            return <LinkSidBar key={i} {...el} />
          })}
        </ul>


      </div>

      <Button variant="ghost" className="shad_button_ghost flex justify-end">
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  )
}

export default LeftSidebar
