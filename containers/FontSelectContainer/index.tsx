import React, { useCallback, useContext } from 'react';
import Select from 'components/Select';
import { Font, predefineFonts } from 'types/font';
import { ActionType, FontContext } from 'lib/api/context/FontContext';

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
    const { font, dispatch } = useContext(FontContext);

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
