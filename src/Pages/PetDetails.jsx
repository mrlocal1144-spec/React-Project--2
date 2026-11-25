
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { applyAdoption } from "../Redux/Features/adoptionSlice"

function PetDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const pet = useSelector(state =>
  state.pets.items.find(item => String(item.id) === String(id))
)

  const user = useSelector(state => state.auth.currentUser)
  const adoptions = useSelector(state => state.adoptions.items)

  if (!pet) return <h2 className="section">Pet not found</h2>

  const alreadyApplied = adoptions.some(
    item => item.petId === pet.id && item.userId === user?.id
  )

  const handleAdoption = () => {
    if (!user) {
      navigate("/login")
      return
    }

    if (user.role !== "user") return

    if (alreadyApplied) {
      alert("You have already applied for this pet!")
      return
    }

    dispatch(applyAdoption({
      petId: pet.id,
      petName: pet.name,
      userId: user.id,
      userName: user.name,
      email: user.email
    }))

    alert("Adoption request submitted successfully!")
  }

  return (
    <section className="details-container">
      <img src={pet.image} alt={pet.name} />

      <div className="details-info">
        <span className="pet-type">{pet.type}</span>
        <h1>{pet.name}</h1>
        <p><strong>Breed:</strong> {pet.breed}</p>
        <p><strong>Age:</strong> {pet.age}</p>
        <p><strong>Adoption Fee:</strong> ₹{pet.price}</p>
        <p>{pet.description}</p>

        <button
          className="primary-btn"
          onClick={handleAdoption}
          disabled={alreadyApplied}
        >
          {alreadyApplied ? "Already Applied" : "Apply for Adoption"}
        </button>
      </div>
    </section>
  )
}

export default PetDetails
