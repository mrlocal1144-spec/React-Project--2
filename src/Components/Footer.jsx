
import { FaPaw, FaHeart } from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <h2><FaPaw /> PetCare</h2>
      <p>Give every pet a loving home.</p>
      <p>Made with <FaHeart className="footer-heart" /> for animals</p>
      <p>© 2026 PetCare. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
