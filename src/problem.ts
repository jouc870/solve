import { assert } from 'console';
import { TAG } from './problem_tags';

export class Problem {
    static readonly recommendSymbol = '✔';

    private bRecommend = false;
    private title = '';
    private url = '';
    private level = -1;
    private tag = TAG.NONE;
    private bSolved = false;
    private deadlineOrNull: Date|null = null;

    private constructor() {
    }

    static createFromJson(json: any) {
        try {
            return Object.assign(new Problem(), json);
        }
        catch {
            return null;
        }
    }

    /** 추천 문제일 경우, recommedSymbol + tilte을 return하고 아니면 그냥 title만 반환 */
    getTitle() {
        return (this.bRecommend) ? Problem.recommendSymbol + ' ' + this.title : this.title;
    }

    getUrl() {
        return this.url;
    }

    getProblemId() {
        let arr = this.url.split('/');

        return arr[arr.length - 1];
    }

    getTag() {
        return this.tag;
    }

    getDeadlineOrNull() {
        return this.deadlineOrNull;
    }

    setDeadline(deadline : Date) {
        this.deadlineOrNull = deadline;
    }

    isSolved() {
        return this.bSolved;
    }

    solve() {
        this.bSolved = true;
    }
}
