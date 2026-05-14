function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0"
      }}
    >
      <div
        style={{
          width: "45px",
          height: "45px",
          border: "4px solid #ddd",
          borderTop: "4px solid black",
          borderRadius: "50%",
          animation:
            "spin 0.8s linear infinite"
        }}
      />
    </div>
  );
}

export default Loader;