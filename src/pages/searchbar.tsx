import { useState, useRef, useEffect } from 'react';
import { Trie } from '../trie';
import { problemProps } from './my_component';

type searchHintProps = { relatedWords: string[], prev: string }
export type searchbarProps = { words: string[] }

function SearchHints(props: searchHintProps) {
  return (
    <div>
      { props.relatedWords.map((relatedWord) => {return <li> { props.prev + relatedWord } </li>}) }
    </div>
  );
}

export function Searchbar(props: problemProps) {
  const [relatedWords, setRelatedWords] = useState<string[]>([]);

  const wordsRef = useRef<Set<string>>(new Set());
  const trieRef = useRef<Trie>(new Trie());
  const inputRef = useRef<HTMLInputElement>(null);
  const prevRef = useRef<string>("");
  
  useEffect(() => { console.log("update") }, [relatedWords]);

  useEffect(() => {
    for (let i = 0; i < props.problems.length; ++i) {
      const title = props.problems[i].title;

      if (!wordsRef.current.has(title)) {
        wordsRef.current.add(title);
        trieRef.current.Insert(title);
      }
    }
  });

  return (
    <>
    <form onSubmit={(event) => {
        event.preventDefault();
        inputRef.current!.value = "";
    }}>
      <input ref={inputRef} onChange={() => {
        prevRef.current = inputRef.current!.value;
        setRelatedWords([...trieRef.current.GetRelatedWords(inputRef.current!.value)]);
      }}/>
    </form>
    <SearchHints prev={prevRef.current} relatedWords={relatedWords}/>
    </>
  )
}
