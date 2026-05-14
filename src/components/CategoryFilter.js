function CategoryFilter({ categories, selected, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px"
      }}
    >
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            onClick={() => onChange(category.id)}
            style={{
              padding: "10px",
              border: selected === category.id ? "2px solid black" : "1px solid #ddd",
              cursor: "pointer"
            }}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;