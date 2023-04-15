import { StyledWord } from './style';

interface wordProps {
  value: string[];
}

export function Word({ value }: wordProps) {
  return (
    <StyledWord>
      {value.map((item) => {
        return <input value={item} />;
      })}
    </StyledWord>
  );
}
