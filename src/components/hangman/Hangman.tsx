import { BaseStructure, Head, Body } from './style';

interface hangmanProps {
  errors: number;
}

export function Hangman({ errors }: hangmanProps) {
  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <BaseStructure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        {errors > 1 && <Body />}
        {errors > 0 && <Head />}
      </BaseStructure>
    </div>
  );
}
