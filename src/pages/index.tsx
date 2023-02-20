import { Problem } from '@/problem';
import { Tag } from '@/problem_tags';
import { MyDate } from '@/my_date';
import { useState, useRef, useEffect, useContext } from 'react';
import { FileUpload, CommitBoard, Table, Canvas, fileProps } from '@/pages/my_component';
import { Trie } from '../trie';
import { problemsContext } from '@/problemsContext';

// test componet.

export default function Home() {
  const [problems, setProblems] = useState<Problem[]>([]); // all data.
  const [filteredProblems, setFilteredProblems] = useState<Problem[]>([]);

  useEffect(() => { setFilteredProblems(problems) }, [problems]);

  return (
    <>
      <FileUpload setData={setProblems} />

      <problemsContext.Provider value={{ problems, filteredProblems, setFilteredProblems }}>
        <Table />
      </problemsContext.Provider>
    </>
  )
}
