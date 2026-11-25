
import { useSelector } from "react-redux"
import PetCard from "../Components/PetCard"

function Wishlist() {
  const pets = useSelector(state => state.pets.items)
  const wishlist = useSelector(state => state.wishlist.items)

  const favouritePets = pets.filter(
    pet => wishlist.includes(pet.id)
  )

  return (
    <section className="section">
      <h2>My Wishlist ❤️</h2>

      <div className="pet-grid">
        {favouritePets.length ? (
          favouritePets.map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))
        ) : (
          <h3>Your wishlist is empty!</h3>
        )}
      </div>
    </section>
  )
}

export default Wishlist
