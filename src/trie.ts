import { Node } from './node';

export class Trie {
    private count = 0;
    private relatedWords:string[] = [];
    private root = new Node();

    Insert(s: string) {
        if (s.length === 0 || s[0] === ' ') { // check all kind of white space.
            return;
        }

        let node = this.root;

        for (let i = 0; i < s.length; ++i) {
            let code = s.codePointAt(i)!;

            if (!node.GetNexts().has(code)) {
                node.GetNexts().set(code, new Node());
            }

            node = node.GetNexts().get(code)!;
        }

        if (!node.IsWord()) {
            node.SetIsWord(true);
            this.count++;
        }
    }

    IsContains(s: string) {
        let node = this.root;

        for (let i = 0; i < s.length; ++i) {
            let code = s.codePointAt(i)!;

            if (!node.GetNexts().has(code)) {
                return false;
            }

            node = node.GetNexts().get(code)!;
        }

        return (node.IsWord()) ? true : false;
    }

    private traversalRecursive(node: Node, prev: string) {
        if (node.GetNexts().size === 0) {
            console.log(prev);
            return;
        }

        node.GetNexts().forEach ((value, key) => {
            this.traversalRecursive(value, prev + String.fromCharCode(key));
        });
    }

    Traversal() {
        console.log(this.count);
        // this.traversalRecursive(this.root, "");
    }

    private getEndWordNodeOrNull(word: string) {
        if (word.length === 0) {
            return null;
        }

        let node: Node | undefined = this.root;

        for (let i = 0; i < word.length; ++i) {
            node = node.GetNexts().get(word.codePointAt(i)!); 

            if (node === undefined) {
                return null;
            }
        }

        return node;
    }

    private getRelatedWordsRecursive(node: Node, s: string, res: string[]) {
        if (node.IsWord()) {
            res.push(s);
        }

        if (node.GetNexts().size === 0) {
            return;
        }

        node.GetNexts().forEach ((value, key) => {
            this.getRelatedWordsRecursive(value, s + String.fromCharCode(key), res);
        });
    }

    GetRelatedWords(word: string) {
        let nodeOrNull = this.getEndWordNodeOrNull(word);

        this.relatedWords = [];
        if (nodeOrNull !== null) {
            this.getRelatedWordsRecursive(nodeOrNull, "", this.relatedWords);
        }

        return this.relatedWords;
    }

    GetCount() {
        return this.count;
    }
}