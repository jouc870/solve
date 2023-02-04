import { MyDate } from '@/my_date';
import { Problem } from '@/problem';
import { assert } from 'console';
import { readFile } from 'fs';
import Papa  from 'papaparse';
import { useState, useRef, useEffect } from 'react';

// change file name.
// super mario maker2 interface? ref ../goal.jpg

const problems: Problem[] = [];

export function FileUpload() {
    const uploadFileRef = useRef<HTMLInputElement>(null);
    
    return (
        <>
        <div>
            <input type={'file'} accept={'.csv'} ref={uploadFileRef} onChange={() => {
                const file = uploadFileRef.current!.files![0];

                Papa.parse(file, { header: true, skipEmptyLines: true, complete: (results) => {
                    for (let i = 0; i < results.data.length; ++i) {
                        // to table data.
                        problems.push(Problem.createFromJson(results.data[i]));
                    }
                    
                    uploadFileRef.current!.value = '';
                }
            });}}>
            </input>
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
    console.log(problems);

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
