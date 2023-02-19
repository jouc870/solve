import { MyDate } from '@/my_date';
import { Problem } from '@/problem';
import { Tag } from '@/problem_tags';
import { Trie } from '@/trie';
import Papa from 'papaparse';
import { useState, useRef, useEffect } from 'react';
import { problemJson } from '@/problemJson';
import { Searchbar } from './searchbar';

export type problemProps = {
    problems: Problem[];
}

export function Table(props: problemProps) {
    const head = ["recommend", "title", "level", "tag", "isSolved"];
    const tableRef = useRef<HTMLTableElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <>
        <Searchbar problems={props.problems}/>
        <form onSubmit={(event) => {
            event.preventDefault();
            inputRef.current!.value = "";
        }}>
    </form>
        <table ref={tableRef}>
            <thead>
                <tr>
                    {
                        head.map((element) => {
                            return <th key={element}>{element}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    props.problems.map((problem) => {
                        console.log(problem)
                        return <tr key={problem.GetId()}>
                            <td> { (problem.isRecommend ? "✔" : "") } </td>
                            <td> <a href={ problem.url }> { problem.title } </a></td>
                            <td> { problem.level }</td>
                            <td> { problem.GetTag() } </td>
                            <td> <input type={'checkbox'} /> </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </>
    );
}

export function FileUpload() {
    const uploadFileRef = useRef<HTMLInputElement>(null);
    const problemRef = useRef<problemJson>();
    const [problems, setProblems] = useState<Problem[]>([]);

    return (
        <>
        <div>
            <input type={'file'} accept={'.csv'} ref={uploadFileRef} onChange={() => {
                const file = uploadFileRef.current!.files![0];

                try {
                    Papa.parse(file, { header: true, skipEmptyLines: true, dynamicTyping: true, complete: (results) => {
                        if (results.errors.length === 0) {
                            const temp: Problem[] = [];

                            for (let i = 0; i < results.data.length; ++i) {
                                problemRef.current = results.data[i] as problemJson;
                                temp.push(new Problem(problemRef.current));
                            }

                            setProblems(temp);
                        }
                    
                        uploadFileRef.current!.value = '';
                        }
                    });
                } catch (err) {
                    console.error(err);
                }
            }}>
            </input>
            <Table problems={problems}/>
        </div>
        </>
    );
}

export function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let x, y;

    return (
    <div>
      <canvas ref={canvasRef} width={300} height={300}style={ {backgroundColor: 'beige'} } onClick={
        (event) => {
            console.log(event);
            const canvasContext = canvasRef.current!.getContext('2d')!;

            if (canvasContext !== null) {
                canvasContext.fillStyle = 'rgb(0, 255, 0)'; // temp

                canvasContext.beginPath();
                canvasContext.arc(event.pageX, event.pageY, 5, 0, Math.PI * 2, true); // check x, y
                canvasContext.stroke();
            }
        }}>
      </canvas>
      <button> create </button>
    </div>
    );
}

function Calendar() {
    // const days = useRef<number>(MyDate.getDays());

    return (
        <div>
        </div>
    );
}

function ProblemList() {

    return (
        <div>
        </div>
    );
}

export function CommitBoard() {
    const daysRef = useRef<number>();
    const rect: any = [];

    useEffect(() => {
        daysRef.current = (MyDate.isLeafYear()) ? 366 : 365;

        for (let i = 1; i <= daysRef.current; i++) {
            // console.log(i);
        }

        console.log(rect);
    });

    return (
        <div>
            {rect}
        </div>
    );
}

