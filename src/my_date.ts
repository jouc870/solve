import assert from "assert";


export class MyDate {
    static date: Date = new Date();
    private static day31 = [ 1, 3, 5, 7, 8, 10, 12 ];

    private constructor() {
    }

    static isLeafYear(): boolean {
        const year = this.date.getFullYear();

        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }

    private static isFloatType(num: number) {
        // test case
        // 9.0
        // 2.2
        // 27

        return (num.toString().indexOf('.') !== -1);
    }

    private static isOdd(num: number) {
        assert (!MyDate.isFloatType(num));

        return (num % 2 !== 0);
    }

    static getDays() {
        const month: number = this.date.getMonth() + 1;

        if (month === 2) {
            return (this.isLeafYear()) ? 29 : 28;
        }

        return ((month < 8 && MyDate.isOdd(month)) || (8 <= month && !MyDate.isOdd(month))) ? 31 : 30;
    }
}
