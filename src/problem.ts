import { Tag } from './problem_tags';
import { problemJson } from './problemJson';

export class Problem {
    readonly isRecommend: boolean;
    readonly title: string;
    readonly url: string;
    readonly level: number;
    readonly tagCode: number;

    private isSolved = false;
    private deadlineOrNull: Date|null = null;

    constructor(json: problemJson) {
        this.isRecommend = json.isRecommend;
        this.title = json.title;
        this.url = json.url;
        this.tagCode = json.tagCode;
        this.level = json.level;
    }

    GetId(): number {
        const temp = this.url.split("/");

        return Number(temp[temp.length - 1]);
    }

    GetTag(): string {
        let copy = this.tagCode;
        let index: number = 0;

        while (copy !== 0) {
            copy >>= 1;
            console.log(copy);
            ++index;
        }

        return Object.keys(Tag)[index];
    }
    
    IsSolved() {
        return this.isSolved;
    }

    Solve() {
        this.isSolved = true;
    }
}
