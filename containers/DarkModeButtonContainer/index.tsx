import React, { useContext } from 'react';
import DarkModeButton from 'components/DarkModeButton';
import { ActionType, AppContext } from 'lib/context';
import { Theme } from 'types/theme';

const DarkModeButtonContainer: React.FC = () => {
    const { theme, dispatch } = useContext(AppContext);

    const onToggle = () => {
        dispatch(ActionType.TOGGLE_THEME, {});
    };

    return (
        <DarkModeButton on={theme === Theme.DARK}
                        onClick={onToggle}
        />
    );
};

export default DarkModeButtonContainer;
