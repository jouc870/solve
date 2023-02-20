import { Problem } from '@/problem';
import { problemsContext } from '@/problemsContext';
import { useState, useRef, useEffect, useContext } from 'react';
import { Trie } from '../trie';

type searchHintProps = { relatedWords: string[] }
// export type searchbarProps = { words: string[], setData: (data: Problem[])=>void }

function SearchHints(props: searchHintProps) {
  return (
    <div>
      { props.relatedWords.map((relatedWord) => {return <li> { relatedWord } </li>}) }
    </div>
  );
}

export function Searchbar() {
  const [relatedWords, setRelatedWords] = useState<string[]>([]);
  const temp = useRef<Problem[]>([]);
  const { problems, setFilteredProblems } = useContext(problemsContext)!;

  const trieRef = useRef<Trie>(new Trie());
  const inputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => { console.log("update") }, [relatedWords]);

  useEffect(() => {
    for (let i = 0; i < problems.length; ++i) {
      trieRef.current.Insert(problems[i].title);
    }
  });

  return (
    <>
    <form onSubmit={(event) => {
        event.preventDefault();
        // inputRef.current!.value = "";

        temp.current = [];

        for (let i = 0; i < relatedWords.length; ++i) {
          for (let j = 0; j < problems.length; ++j) {
            if (relatedWords[i] === problems[j].title) {
              temp.current.push(problems[j]);
              break;
            }
          }
        }

        setFilteredProblems(temp.current);
    }}>
      <input ref={inputRef} onChange={() => {
        setRelatedWords([...trieRef.current.GetRelatedWords(inputRef.current!.value)]);
        if (inputRef.current!.value === "") {
          setFilteredProblems(problems);
        };
      }}/>
    </form>
    <SearchHints relatedWords={relatedWords}/>
    </>
  )
}
