interface resultProps {
  value: string;
}
export function Result({ value }: resultProps) {
  return <div style={{ margin: "30px auto" }}>Risultato: {value}</div>;
}
