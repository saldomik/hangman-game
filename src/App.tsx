import './App.css';
import { Result } from './components/result/Result';
import { Hangman } from './components/hangman/Hangman';
import { Word } from './components/word/Word';
import { Keyboard } from './components/keyboard/Keyboard';
import words from './../words.json';
import { useEffect, useState } from 'react';

function App() {
  const [guessingWord, setGuessingWord] = useState<string[]>([]);
  const [wordToGuess, setwordToGuess] = useState<string[]>([]);
  const [result, setResult] = useState<string>('');
  const [errors, setErrors] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const index = Math.floor(Math.random() * 2465);
    const word = words.data[index];
    setwordToGuess(word.split(''));
    setGuessingWord(Array(word.length).fill(() => ''));

    window.addEventListener('resize', () => {});
  }, []);

  useEffect(() => {
    if (
      guessingWord.every((item) => wordToGuess.includes(item)) &&
      wordToGuess.every((item) => guessingWord.includes(item))
    )
      setResult('Hai vinto!');
    else setResult('');

    if (errors === 6) setResult('Hai perso!');
  }, [guessingWord, wordToGuess, errors]);

  const handleKeyboardPress = (value: string) => {
    let idx = wordToGuess.indexOf(value.toLowerCase());
    if (idx !== -1) {
      const indices: number[] = [];
      while (idx !== -1) {
        indices.push(idx);
        idx = wordToGuess.indexOf(value.toLowerCase(), idx + 1);
      }

      setGuessingWord((arr) => {
        indices.forEach((item) => {
          arr.splice(item, 1, value.toLowerCase());
        });
        return [...arr];
      });
    } else {
      setErrors(errors + 1);
    }
  };

  return (
    <div className="App">
      <Result value={result} />
      <Hangman errors={errors} isMobile={isMobile} />
      <p>{wordToGuess}</p>
      <p>{errors}</p>
      <Word value={guessingWord} />
      <Keyboard onKeyboardPress={handleKeyboardPress} />
    </div>
  );
}

export default App;
