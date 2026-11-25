
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import PetCard from "../Components/PetCard"
import { FaPaw, FaHeart, FaShieldDog } from "react-icons/fa6"

function Home() {
  const pets = useSelector(state => state.pets.items)

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label"><FaPaw /> Welcome to Pet Adoption</span>
          <h1>Find Your New Best Friend</h1>
          <p>
            Every pet deserves love, care and a forever home.
            Find your perfect companion today.
          </p>
          <Link to="/explore" className="primary-btn">
            Explore Pets
          </Link>
        </div>
      </section>

      <section className="features">
        <div>
          <FaPaw />
          <h3>Find Pets</h3>
          <p>Discover your perfect companion.</p>
        </div>

        <div>
          <FaHeart />
          <h3>Show Love</h3>
          <p>Save your favourite pets.</p>
        </div>

        <div>
          <FaShieldDog />
          <h3>Adopt Safely</h3>
          <p>Give animals a loving home.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="sub-heading">MEET YOUR COMPANION</span>
            <h2>Our Lovely Pets</h2>
          </div>
          <Link to="/explore" className="more-link">View All →</Link>
        </div>

        <div className="pet-grid">
          {pets.slice(0, 3).map(pet => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
