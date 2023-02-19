export class Node {
    private isWord = false;
    private nexts = new Map<number, Node>;

    IsWord() {
        return this.isWord;
    }

    SetIsWord(b: boolean) {
        this.isWord = b;
    }

    GetNexts() {
        return this.nexts;
    }
}