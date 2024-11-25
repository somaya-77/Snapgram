import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthed = false;
  return (
    <div>
      {isAuthed ? <Navigate to="/" /> :
        <div className="h-screen flex w-ful">
          <img className="h-screen object-cover bg-no-repeat hidden xl:block w-1/2"
            src="/assets/images/side-img.svg"
            alt="bg-auth" />
            
          <section className="h-screen flex justify-center items-center w-full xl:w-1/2 flex-col py-10">
            <Outlet />
          </section>
        </div>
      }
    </div>
  )
}

export default AuthLayout;