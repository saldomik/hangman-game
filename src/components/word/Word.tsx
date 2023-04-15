interface wordProps {
  value: string[];
}

export function Word({ value }: wordProps) {
  return (
    <div style={{ display: "flex", gap: "8px", margin: "30px auto" }}>
      {value.map((item) => {
        return (
          <div
            style={{
              display: "flex",
              width: "50px",
              height: "50px",
              borderBottom: "5px solid black",
            }}
          >
            <span style={{ margin: "auto" }}>{item}</span>
          </div>
        );
      })}
    </div>
  );
}
