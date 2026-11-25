
import { useSelector } from "react-redux"

function MyAdoptions() {
  const user = useSelector(state => state.auth.currentUser)
  const adoptions = useSelector(state => state.adoptions.items)

  const myRequests = adoptions.filter(
    item => item.userId === user?.id
  )

  return (
    <section className="section">
      <h2>My Adoption Requests</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Request ID</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {myRequests.map(item => (
              <tr key={item.id}>
                <td>{item.petName}</td>
                <td>{item.id}</td>
                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!myRequests.length && <p>No adoption requests yet.</p>}
    </section>
  )
}

export default MyAdoptions
