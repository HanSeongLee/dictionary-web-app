import axios from 'axios';

export const searchWord = async (word: string): Promise<Dictionary> => {
    const { data: result } = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (result.length === 0) {
        throw new Error('Not found!');
    }
    return result[0] as Dictionary;
};
