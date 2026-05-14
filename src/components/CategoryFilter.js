import React from "react";

function CategoryFilter({
  categories,
  selected,
  onChange
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        marginBottom: "25px"
      }}
    >
      <button
        onClick={() => onChange("")}
        style={{
          padding: "10px 16px",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          background:
            selected === ""
              ? "#111"
              : "#fff",
          color:
            selected === ""
              ? "#fff"
              : "#111",
          boxShadow:
            "0 2px 8px rgba(0,0,0,0.08)"
        }}
      >
        All
      </button>

      {categories.map((category) => {
        return (
          <button
            key={category.id}
            onClick={() =>
              onChange(category.slug)
            }
            style={{
              padding: "10px 16px",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              background:
                selected === category.slug
                  ? "#111"
                  : "#fff",
              color:
                selected === category.slug
                  ? "#fff"
                  : "#111",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.08)"
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