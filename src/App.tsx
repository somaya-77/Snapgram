import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./_auth/forms/Signin";
import Signup from "./_auth/forms/Signup";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Home,Explore,People, Saved, CreatePost,Profile,EditPost,PostDetails,UpdateProfile } from "./_root/pages";
import { Toaster } from "@/components/ui/toaster"



function App() {
  return (
    <>
      <BrowserRouter>
      <main>
        <Routes>
          {/* Auth */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-up" element={<Signup />}/>
            <Route path="/sign-in" element={<Signin />}/>
          </Route>

          <Route element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path="/explore" element={<Explore />}/>
            <Route path="/users" element={<People />}/>
            <Route path="/saved" element={<Saved />}/>
            <Route path="/create_post" element={<CreatePost />}/>
            <Route path="/update_post/:id" element={<EditPost />}/>
            <Route path="/posts/:id" element={<PostDetails />}/>
            <Route path="/profile/:id/*" element={<Profile />}/>
            <Route path="/update-profile/:id" element={<UpdateProfile />}/>
          </Route>

        </Routes>

        <Toaster />
      </main>
      </BrowserRouter>
    </>
  )
}

export default App;
