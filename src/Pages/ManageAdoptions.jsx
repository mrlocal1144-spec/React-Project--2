
import { useDispatch, useSelector } from "react-redux"
import { updateAdoptionStatus } from "../Redux/Features/adoptionSlice"

function ManageAdoptions() {
  const adoptions = useSelector(state => state.adoptions.items)
  const dispatch = useDispatch()

  const changeStatus = (id, status) => {
    dispatch(updateAdoptionStatus({ id, status }))
  }

  return (
    <section className="section">
      <h1>Manage Adoption Requests</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Pet</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {adoptions.map(item => (
              <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>{item.petName}</td>
                <td>
                  <span className={`status ${item.status.toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  {item.status === "Pending" ? (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => changeStatus(item.id, "Approved")}
                      >
                        Approve
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => changeStatus(item.id, "Rejected")}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    item.status
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!adoptions.length && <p>No adoption requests yet.</p>}
    </section>
  )
}

export default ManageAdoptions
