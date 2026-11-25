
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../Redux/Features/authSlice"
import { FaPaw } from "react-icons/fa"

function Navbar() {
  const user = useSelector(state => state.auth.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/login")
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <FaPaw /> Pet Adoption
      </Link>

      <div className="nav-links">
        {user?.role === "admin" ? (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/pets">Pets</Link>
            <Link to="/admin/users">Users</Link>
            <Link to="/admin/adoptions">Adoptions</Link>
          </>
        ) : user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/my-adoptions">My Adoptions</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>

      {user && (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  )
}

export default Navbar
