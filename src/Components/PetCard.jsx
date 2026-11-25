
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { toggleWishlist } from "../Redux/Features/wishlistSlice"
import { FaHeart, FaRegHeart } from "react-icons/fa"

function PetCard({ pet }) {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist.items)
  const liked = wishlist.includes(pet.id)

  return (
    <div className="pet-card">
      <div className="pet-image">
        <img src={pet.image} alt={pet.name} />

        <button
          className="heart-btn"
          onClick={() => dispatch(toggleWishlist(pet.id))}
        >
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="pet-info">
        <span className="pet-type">{pet.type}</span>
        <h3>{pet.name}</h3>
        <p>{pet.breed}</p>
        <p>{pet.age}</p>
        <h4>₹{pet.price}</h4>

        <Link to={`/pet/${pet.id}`} className="primary-btn">
          View Details
        </Link>
      </div>
    </div>
  )
}

export default PetCard
