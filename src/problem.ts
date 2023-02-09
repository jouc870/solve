
import { TAG } from './problem_tags';

export class Problem {
    private isRecommend: boolean = false;
    private title = '';
    private url = '';
    private level = 0;
    private tag = TAG.NONE;
    private isSolved = false;
    private deadlineOrNull: Date|null = null;

    private constructor() {
    }


    static CreateFromJson(json: object): Problem {
        try {
            const problem = Object.assign(new Problem(), json);

            return problem;
        }
        catch {
            // assert (false);

            return new Problem(); // return empty problem.
        }
    }

    IsRecommend() {
        return this.IsRecommend;
    }

    GetTitle() {
        return this.title;
    }

    GetUrl() {
        return this.url;
    }

    GetLevel() {
        return this.level;
    }

    GetProblemId() {
        let arr = this.url.split('/');

        return arr[arr.length - 1];
    }

    GetTag() {
        return this.tag;
    }

    GetDeadlineOrNull() {
        return this.deadlineOrNull;
    }

    SetDeadline(deadline : Date) {
        this.deadlineOrNull = deadline;
    }

    IsSolved() {
        return this.isSolved;
    }

    Solve() {
        this.isSolved = true;
    }
}
