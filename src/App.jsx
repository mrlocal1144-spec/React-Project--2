
import { Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProtectedRoute from "./Components/ProtectedRoute"

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Explore from "./Pages/Explore"
import PetDetails from "./Pages/PetDetails"
import Wishlist from "./Pages/Wishlist"
import MyAdoptions from "./Pages/MyAdoptions"
import AdminDashboard from "./Pages/AdminDashboard"
import ManagePets from "./Pages/ManagePets"
import ManageUsers from "./Pages/ManageUsers"
import ManageAdoptions from "./Pages/ManageAdoptions"

function App() {
  const user = useSelector(state => state.auth.currentUser)

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/pet/:id" element={<PetDetails />} />

          <Route
            path="/login"
            element={
              user
                ? <Navigate to={user.role === "admin" ? "/admin" : "/"} replace />
                : <Login />
            }
          />

          <Route
            path="/register"
            element={user ? <Navigate to="/" replace /> : <Register />}
          />

          <Route element={<ProtectedRoute role="user" />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/my-adoptions" element={<MyAdoptions />} />
          </Route>

          <Route element={<ProtectedRoute role="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/pets" element={<ManagePets />} />
            <Route path="/admin/users" element={<ManageUsers />} />
            <Route path="/admin/adoptions" element={<ManageAdoptions />} />
          </Route>

          <Route path="*" element={<h1 className="not-found">404 - Page Not Found</h1>} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
