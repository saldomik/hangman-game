import "./App.css";
import { Result } from "./Result";
import { Hangman } from "./Hangman";
import { Word } from "./Word";
import { Keyboard } from "./Keyboard";
import words from "./../words.json";
import { useEffect, useState } from "react";

function App() {
  const handleKeyboardPress = (value: string) => {
    let idx = wordToGuess.indexOf(value.toLowerCase());
    if (idx !== -1) {
      const indices: number[] = [];
      while (idx !== -1) {
        indices.push(idx);
        idx = wordToGuess.indexOf(value.toLowerCase(), idx + 1);
      }
      console.log(indices);

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
  const [guessingWord, setGuessingWord] = useState<string[]>([]);
  const [wordToGuess, setwordToGuess] = useState<string[]>([]);
  const [result, setResult] = useState<string>("");
  const [errors, setErrors] = useState<number>(0);

  useEffect(() => {
    const index = Math.floor(Math.random() * 2465);
    const word = words.data[index];
    setwordToGuess(word.split(""));
    setGuessingWord(Array(word.length).fill(() => ""));
  }, []);

  useEffect(() => {
    console.log(JSON.stringify(guessingWord));
    console.log(JSON.stringify(wordToGuess));
    if (
      guessingWord.every((item) => wordToGuess.includes(item)) &&
      wordToGuess.every((item) => guessingWord.includes(item))
    )
      setResult("Hai vinto!");
    else setResult("");
  }, [guessingWord]);

  return (
    <div className="App">
      <Result value={result} />
      <Hangman errors={errors} />
      <p>{wordToGuess}</p>
      <p>{errors}</p>
      <Word value={guessingWord} />
      <Keyboard onKeyboardPress={handleKeyboardPress} />
    </div>
  );
}

export default App;
