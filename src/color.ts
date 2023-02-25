export class Color {
    static readonly default = [new Color(161, 228, 172), new Color(0, 121, 80)]; // green.
    static readonly a = [new Color(255, 212, 89), new Color(255, 95, 132)];
    // static readonly b = [new Color(125, 247, 255), new Color(253, 125, 171)];
    static readonly userCustom = [];

    readonly r;
    readonly g;
    readonly b;

    constructor(r: number, g: number, b: number) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    static ConvertHex(color: Color): string {
        const code = (color.r << 16) | (color.g << 8) | color.b;

        return code.toString(16);
    }
}