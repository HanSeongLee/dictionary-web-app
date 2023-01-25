import React, { useContext } from 'react';
import DarkModeButton from 'components/DarkModeButton';
import { ActionType, AppContext } from 'lib/context';

const DarkModeButtonContainer: React.FC = () => {
    const { theme, dispatch } = useContext(AppContext);

    const onToggle = () => {
        dispatch(ActionType.TOGGLE_THEME, {});
    };

    return (
        <DarkModeButton on={theme === 'dark'}
                        onClick={onToggle}
        />
    );
};

export default DarkModeButtonContainer;
