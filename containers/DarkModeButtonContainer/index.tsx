import React, { useContext } from 'react';
import DarkModeButton from 'components/DarkModeButton';
import { Theme } from 'types/theme';
import { ActionType, ThemeContext } from 'lib/api/context/ThemeContext';

const DarkModeButtonContainer: React.FC = () => {
    const { theme, dispatch } = useContext(ThemeContext);

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
