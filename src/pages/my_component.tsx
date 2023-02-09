import { MyDate } from '@/my_date';
import { Problem } from '@/problem';
import { TAG } from '@/problem_tags';
import Papa, { ParseResult }  from 'papaparse';
import { useState, useRef, useEffect } from 'react';
import { Style } from 'util'; '@/styles/globals.css';

// change file name.
// super mario maker2 interface? ref ../goal.jpg

type tableProps = {
    problems: Problem[];
}

export function Table(props: tableProps) {
    const head = ["recommend", "title", "level", "tag", "isSolved"];
    const tableRef = useRef<HTMLTableElement>(null);
    const keyRef = useRef<number>(0);

    return <table ref={tableRef}>
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
                    keyRef.current++;

                    return <tr key={keyRef.current}>
                        <td>{ problem.IsRecommend() ? "✔" : " " }</td>
                        <td><a href={ problem.GetUrl() }>{ problem.GetTitle() }</a></td>
                        <td>{ problem.GetLevel() }</td>
                        <td>{ problem.GetTag() }</td>
                        <td> false </td>
                    </tr>
                })
            }
        </tbody>
    </table>
}

export function FileUpload() {
    const uploadFileRef = useRef<HTMLInputElement>(null);
    // const [problems, setProblems] = useState<Problem[]>([]);
    const problemsRef = useRef<Problem[]>([]);

    const [temp, setTemp] = useState<number>(0);
    
    return (
        <>
        <div>
            <input type={'file'} accept={'.csv'} ref={uploadFileRef} onChange={() => {
                const file = uploadFileRef.current!.files![0];

                try {
                    Papa.parse(file, { header: true, skipEmptyLines: true, complete: (results) => {
                        // setProblems([]);

                        for (let i = 0; i < results.data.length; ++i) {
                            problemsRef.current.push(Problem.CreateFromJson(results.data[i] as object));
                        }

                    
                        uploadFileRef.current!.value = '';

                        setTemp(temp + 1);
                        }
                    });
                } catch (err) {
                    console.error(err);
                }
            }}>
            </input>
            <h3> total : {problemsRef.current.length} </h3>
            <Table problems={problemsRef.current}/>
        </div>
        </>
    );
}

function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    let x, y;

    return (
    <div>
      <canvas ref={canvasRef} width={300} height={300}style={ {backgroundColor: 'beige'} } onClick={
        (event) => {
            const canvasContext = canvasRef.current!.getContext('2d')!;

            if (canvasContext !== null) {
                canvasContext.fillStyle = 'rgb(0, 255, 0)'; // temp

                canvasContext.beginPath();
                canvasContext.arc(event.pageX, event.pageY, 5, 0, Math.PI * 2, true); // check x, y
                canvasContext.stroke();
            }
        }}>
      </canvas>
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

