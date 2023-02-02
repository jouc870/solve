import { assert } from 'console';
import { TAG } from './problem_tags';

export class Problem {
    static readonly recommendSymbol = '✔';

    private bRecommend;
    private title;
    private url;
    private level;
    private tag;
    private bSolved = false;
    private deadlineOrNull: Date|null = null;

    constructor(isRecommend: boolean, title: string, url: string, level: number, tag : TAG) {
        this.bRecommend = isRecommend;
        this.title = title;
        this.url = url;
        this.level = level;
        this.tag = tag;
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
