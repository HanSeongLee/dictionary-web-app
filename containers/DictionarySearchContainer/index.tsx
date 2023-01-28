import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import SearchField from 'components/SearchField';
import DictionaryInfo from 'components/DictionaryInfo';
import { searchWord } from 'lib/api/dictionary';
import NoDefinitionsFound from 'components/NoDefinitionsFound';
import { useRouter } from 'next/router';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    query?: string;
}

const DictionarySearchContainer: React.FC<IProps> = ({ query, ...props }) => {
    const [search, setSearch] = useState<string>(query ? query : '');
    const [result, setResult] = useState<{ found: boolean | null; data: Dictionary | null }>({
        found: null,
        data: null,
    });
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const onChangeSearch = useCallback((e) => {
        setSearch(e.target.value);
        setError('');
    }, []);

    const onKeyDownSearch = useCallback(async (e) => {
        const { key } = e;
        if (key !== 'Enter') {
            return ;
        }

        if (search === '') {
            setError(`Whoops, can't be empty...`);
            return ;
        }

        await router.push({
            query: {
                q: search,
            },
        }, '', {
            shallow: true,
        });
        await onSearch(search);
    }, [search]);

    const onSearch = async (word: string) => {
        try {
            const result = await searchWord(word);
            setResult({
                found: true,
                data: result,
            });
        } catch (e) {
            setResult({
                found: false,
                data: null,
            });
        }
    };

    useEffect(() => {
        if (!query) {
            setSearch('');
            setResult({
                found: null,
                data: null,
            });
            return;
        }

        setSearch(query);
        onSearch(query);
    }, [query]);

    return (
        <div {...props}>
            <div>
                <SearchField placeholder={'Search for any word…'}
                             value={search}
                             onChange={onChangeSearch}
                             onKeyDown={onKeyDownSearch}
                             error={error}
                />
            </div>
            {result.found && result.data && (
                <DictionaryInfo dictionary={result.data} />
            )}
            {result.found != null && !result.found && (
                <NoDefinitionsFound />
            )}
        </div>
    );
};

export default DictionarySearchContainer;
