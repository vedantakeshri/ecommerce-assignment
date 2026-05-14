function Loader() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 0"
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #ddd",
          borderTop: "5px solid black",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      />

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;