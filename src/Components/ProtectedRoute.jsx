
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

function ProtectedRoute({ role }) {
  const user = useSelector(state => state.auth.currentUser)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
