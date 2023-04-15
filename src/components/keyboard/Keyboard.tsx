interface keyboardProps {
  onKeyboardPress: (value: string) => void;
}

export function Keyboard({ onKeyboardPress }: keyboardProps) {
  const keyboardLetters = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        maxWidth: "600px",
      }}
    >
      {keyboardLetters.map((item) => (
        <div
          style={{
            cursor: "pointer",
            width: "50px",
            height: "50px",
            border: "5px solid black",
            display: "flex",
          }}
          onClick={() => onKeyboardPress(item)}
        >
          <div style={{ margin: "auto" }}>{item}</div>
        </div>
      ))}
    </div>
  );
}
