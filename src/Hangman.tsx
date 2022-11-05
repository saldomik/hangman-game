interface hangmanProps {
  errors: number;
}

export function Hangman({ errors }: hangmanProps) {
  return (
    <div style={{ width: "400px", position: "relative", margin: "auto" }}>
      {errors > 1 && (
        <div
          style={{
            width: "10px",
            height: "150px",
            backgroundColor: "black",
            position: "absolute",
            top: "110px",
            right: "5px",
          }}
        ></div>
      )}
      {errors > 0 && (
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            position: "absolute",
            border: "5px solid black",
            top: "50px",
            right: "-20px",
          }}
        ></div>
      )}
      <div
        style={{
          width: "10px",
          height: "50px",
          position: "absolute",
          backgroundColor: "black",
          right: "5px",
        }}
      ></div>
      <div
        style={{
          width: "200px",
          height: "10px",
          backgroundColor: "black",
          position: "absolute",
          right: "5px",
        }}
      ></div>
      <div
        style={{
          width: "10px",
          height: "500px",
          backgroundColor: "black",
          margin: "auto",
        }}
      ></div>
      <div
        style={{
          width: "250px",
          height: "10px",
          backgroundColor: "black",
          margin: "auto",
        }}
      ></div>
    </div>
  );
}
