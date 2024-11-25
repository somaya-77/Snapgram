import { Link } from "react-router-dom";
import { Button } from "../ui/button";


const TopBar = () => {
  return (
    <section className="topBar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img 
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4">
          <Button variant="ghost" className="shad_button_ghost">
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to='' className="flex-center gap-3">
            <img src="/assets/images/profile.svg" alt='profile' 
            className="size-8 rounded-full"/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TopBar;
