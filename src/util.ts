import bcrypt from "bcryptjs";

export class Util {
    private static bcrypt = require('bcryptjs');
    private static saltRound = 10;

    private constructor() {
    }

    static Hash(password: string) {
        return this.bcrypt.hashSync(password, this.saltRound);
    }

    static async Hash1(password: string) {
        bcrypt.hash(password, this.saltRound, (err, hash) => {
            if (err) {
                console.error(err);
                return "";
            }

            return hash;
        });
    }

    static Compare(password: string, hash: string) {
        return bcrypt.compareSync(password, hash);
    }

}
