export const Color = {
    RESET: "\x1b[39;49;00m",
    Black: "0;01",
    Blue: "4;01",
    Cyan: "6;01",
    Gray: "7;11",
    Green: "2;01",
    Purple: "5;01",
    Red: "1;01",
    Yellow: "3;01",
    Light: {
        Black: "0;11",
        Blue: "4;11",
        Cyan: "6;11",
        Gray: "7;01",
        Green: "2;11",
        Purple: "5;11",
        Red: "1;11",
        Yellow: "3;11"
    }
};

export const log = (input: any, { l = 'log', i = false, c }: { l?: keyof Console; i?: boolean; c?: string } = {}) => {
    if (typeof input === 'object')
        input = JSON.stringify(input, null, i ? 2 : undefined);
    if (c)
        input = `\x1b[3${c}m${input}${Color.RESET}`;
    console[l](input);
};
