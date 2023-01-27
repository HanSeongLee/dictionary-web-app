export enum Font {
    SANS_SERIF = 'Sans Serif',
    SERIF = 'Serif',
    MONO = 'Mono',
}

export const predefineFonts: { [key in Font]: string } = {
    [Font.SANS_SERIF]: 'Inter',
    [Font.SERIF]: 'Lora',
    [Font.MONO]: 'Inconsolata',
};
