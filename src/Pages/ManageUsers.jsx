
import { useSelector } from "react-redux"

function ManageUsers() {
  const users = useSelector(state => state.auth.users)
  const normalUsers = users.filter(user => user.role === "user")

  return (
    <section className="section">
      <h1>Registered Users</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            {normalUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!normalUsers.length && <p>No users registered yet.</p>}
    </section>
  )
}

export default ManageUsers
