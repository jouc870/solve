export class MyDate {
    static year : number = new Date().getFullYear();

    private constructor() {
    }

    static isLeafYear() : boolean {
        return (this.year % 400 == 0) || (this.year % 4 == 0 && this.year % 100 != 0);
    }
}
