
import { useState } from "react";
import { useSelector } from "react-redux";
import PetCard from "../Components/PetCard";

function Explore() {
  const pets = useSelector(state => state.pets.items);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [expanded, setExpanded] = useState({});

const categories = ["All", "Dog", "Cat", "Bird", "Rabbit", "Snake"];

  const filteredPets = pets.filter(pet => {
    const matchesCategory =
      category === "All" || pet.type === category;

    const matchesSearch =
      pet.name.toLowerCase().includes(search.toLowerCase()) ||
      pet.breed.toLowerCase().includes(search.toLowerCase()) ||
      pet.type.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const visibleCategories =
    category === "All" ? categories.filter(item => item !== "All") : [category];

  const toggleShowMore = type => {
    setExpanded(previous => ({
      ...previous,
      [type]: !previous[type]
    }));
  };

  return (
    <div className="explore-container">
      <h1>Explore Pets</h1>
      <p>Find your perfect companion</p>

      <input
        type="text"
        placeholder="Search pets..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "12px",
          margin: "20px 0",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "30px"
      }}>
        {categories.map(item => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              background: category === item ? "#4f46e5" : "#e5e7eb",
              color: category === item ? "white" : "#222"
            }}
          >
            {item === "All" ? "All Pets" : `${item}s`}
          </button>
        ))}
      </div>

      {visibleCategories.map(type => {
        const categoryPets = filteredPets.filter(
          pet => pet.type === type
        );

        if (categoryPets.length === 0) return null;

        const showAll = expanded[type];
        const visiblePets = showAll
          ? categoryPets
          : categoryPets.slice(0, 5);

        return (
          <section key={type} style={{ marginBottom: "45px" }}>
            <h2>
              {type}s
            </h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "22px",
              marginTop: "20px"
            }}>
              {visiblePets.map(pet => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>

            {categoryPets.length > 1 && (
              <button
                onClick={() => toggleShowMore(type)}
                style={{
                  display: "block",
                  margin: "22px auto 0",
                  padding: "11px 28px",
                  border: "none",
                  borderRadius: "8px",
                  background: "#4f46e5",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            )}
          </section>
        );
      })}

      {filteredPets.length === 0 && (
        <p>No pets found.</p>
      )}
    </div>
  );
}

export default Explore;
