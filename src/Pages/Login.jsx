
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, clearError } from "../Redux/Features/authSlice"
import { Link, useNavigate } from "react-router-dom"
import { FaPaw } from "react-icons/fa"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, currentUser } = useSelector(state => state.auth)

  useEffect(() => {
    if (currentUser) {
      navigate(currentUser.role === "admin" ? "/admin" : "/")
    }
  }, [currentUser, navigate])

  const handleLogin = e => {
    e.preventDefault()
    dispatch(clearError())
    dispatch(login({ email, password }))
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <FaPaw className="auth-icon" />
        <h2>Welcome Back!</h2>
        <p>Login to your PetCare account</p>

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn">Login</button>

        <p className="auth-bottom">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

        <div className="demo-login">
          <p>Admin Demo Credentials</p>
          <span>admin@gmail.com</span>
          <span>admin123</span>
        </div>
      </form>
    </div>
  )
}

export default Login
