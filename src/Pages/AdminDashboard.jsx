
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { FaPaw, FaUsers, FaHeart, FaClock } from "react-icons/fa"

function AdminDashboard() {
  const pets = useSelector(state => state.pets.items)
  const users = useSelector(state => state.auth.users)
  const adoptions = useSelector(state => state.adoptions.items)

  const pending = adoptions.filter(
    item => item.status === "Pending"
  )

  const stats = [
    {
      title: "Total Pets",
      value: pets.length,
      icon: <FaPaw />,
      link: "/admin/pets"
    },
    {
      title: "Total Users",
      value: users.filter(user => user.role === "user").length,
      icon: <FaUsers />,
      link: "/admin/users"
    },
    {
      title: "Adoption Requests",
      value: adoptions.length,
      icon: <FaHeart />,
      link: "/admin/adoptions"
    },
    {
      title: "Pending Requests",
      value: pending.length,
      icon: <FaClock />,
      link: "/admin/adoptions"
    }
  ]

  return (
    <section className="section admin-section">
      <span className="sub-heading">ADMINISTRATION</span>
      <h1>Dashboard</h1>
      <p>Welcome back, Admin!</p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <h1>{item.value}</h1>
            <Link to={item.link}>View Details →</Link>
          </div>
        ))}
      </div>

      <div className="admin-welcome">
        <h2>Manage Your PetCare System</h2>
        <p>Manage pets, users and adoption requests from one place.</p>
        <Link to="/admin/pets" className="primary-btn">Manage Pets</Link>
      </div>
    </section>
  )
}

export default AdminDashboard
