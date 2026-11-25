
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { register, clearError } from "../Redux/Features/authSlice"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { error, currentUser } = useSelector(state => state.auth)

  useEffect(() => {
    if (currentUser) navigate("/")
  }, [currentUser, navigate])

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(clearError())
    dispatch(register(form))
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p>Join our PetCare family</p>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          minLength={6}
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />

        {error && <p className="error">{error}</p>}

        <button className="primary-btn">Create Account</button>

        <p className="auth-bottom">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
