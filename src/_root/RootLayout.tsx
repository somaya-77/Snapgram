import BottomBar from "@/components/shared/BottomBar"
import LeftSidebar from "@/components/shared/LeftSidebar"
import TopBar from "@/components/shared/TopBar"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <TopBar />
      <LeftSidebar />

      <section className="h-full w-full pb-16 md:pb-0">
        <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default RootLayout;