
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPet, updatePet, deletePet } from "../Redux/Features/petSlice"

const emptyForm = {
  name: "",
  type: "Dog",
  breed: "",
  age: "",
  price: "",
  image: "",
  description: ""
}

function ManagePets() {
  const pets = useSelector(state => state.pets.items)
  const dispatch = useDispatch()

  const [form, setForm] = useState(emptyForm)
  const [editId, setEditId] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    const data = {
      ...form,
      price: Number(form.price)
    }

    if (editId) {
      dispatch(updatePet({ ...data, id: editId }))
      setEditId(null)
    } else {
      dispatch(addPet(data))
    }

    setForm(emptyForm)
  }

  const handleEdit = pet => {
    setForm({
      name: pet.name,
      type: pet.type,
      breed: pet.breed,
      age: pet.age,
      price: pet.price,
      image: pet.image,
      description: pet.description
    })

    setEditId(pet.id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = id => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      dispatch(deletePet(id))
    }
  }

  return (
    <section className="section">
      <h1>Manage Pets</h1>

      <form className="pet-form" onSubmit={handleSubmit}>
        <h2>{editId ? "Update Pet" : "Add New Pet"}</h2>

        <input
          placeholder="Pet Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        />

        <select
          value={form.type}
          onChange={e => setForm({ ...form, type: e.target.value })}
        >
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Other</option>
        </select>

        <input
          placeholder="Breed"
          value={form.breed}
          onChange={e => setForm({ ...form, breed: e.target.value })}
          required
        />

        <input
          placeholder="Age"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
          required
        />

        <input
          type="number"
          min="0"
          placeholder="Adoption Fee"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          required
        />

        <input
          type="url"
          placeholder="Image URL"
          value={form.image}
          onChange={e => setForm({ ...form, image: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
          required
        />

        <button className="primary-btn">
          {editId ? "Update Pet" : "Add Pet"}
        </button>

        {editId && (
          <button
            type="button"
            className="secondary-btn"
            onClick={() => {
              setEditId(null)
              setForm(emptyForm)
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2>All Pets ({pets.length})</h2>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Breed</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pets.map(pet => (
              <tr key={pet.id}>
                <td>
                  <img className="table-image" src={pet.image} alt={pet.name} />
                </td>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>{pet.breed}</td>
                <td>₹{pet.price}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(pet)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(pet.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ManagePets
