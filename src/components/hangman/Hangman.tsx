import { BaseStructure, Head, Body } from './style';

interface hangmanProps {
  errors: number;
  isMobile: boolean;
}

export function Hangman({ errors, isMobile }: hangmanProps) {
  return (
    <div style={{ width: '400px', margin: 'auto' }}>
      <BaseStructure isMobile={true}>
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
