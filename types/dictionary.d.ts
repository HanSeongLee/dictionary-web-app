type License = {
    name: string;
    url: string;
};

type Dictionary = {
    word: string;
    phonetic: string;
    phonetics: {
        text: string;
        audio: string;
        sourceUrl?: string;
        license?: License;
    }[];
    meanings: {
        partOfSpeech: string;
        definitions: {
            definition: string;
            synonyms: string[];
            antonyms: string[];
            example?: string;
        }[];
        synonyms: string[];
        antonyms: string[];
    }[];
    license: License;
    sourceUrls: string[];
};
