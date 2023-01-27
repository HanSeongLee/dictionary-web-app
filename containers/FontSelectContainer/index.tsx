import React, { useCallback, useContext } from 'react';
import Select from 'components/Select';
import { Font, predefineFonts } from 'types/font';
import { ActionType, AppContext } from 'lib/context';

const options = Object.values(Font).map((name) => {
    return {
        label: name,
        value: name,
        style: {
            fontFamily: predefineFonts[name],
        },
    };
});

const FontSelectContainer: React.FC = () => {
    const { font, dispatch } = useContext(AppContext);

    const onChange = useCallback((value: string) => {
        dispatch(ActionType.CHANGE_FONT, value);
    }, []);

    return (
        <Select value={font}
                onChangeValue={onChange}
                options={options}
        />
    );
};

export default FontSelectContainer;
