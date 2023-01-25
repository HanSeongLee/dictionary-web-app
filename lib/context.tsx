import React, { useEffect, useState } from 'react';
import { Theme } from 'types/theme';

export enum ActionType {
    TOGGLE_THEME,
}

const initialValue = {
    theme: Theme.LIGHT,
    dispatch: (actionType: ActionType, payload: unknown) => {},
};

export const AppContextWrapper: React.FC = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = (actionType: ActionType, payload: unknown) => {
        switch (actionType) {
            case ActionType.TOGGLE_THEME:
                setValue({
                    ...value,
                    theme: value.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT,
                });
                return;
        }
    };

    useEffect(() => {
        const htmlElement = window.document.querySelector('html');
        const { theme } = value;

        if (!htmlElement) {
            return;
        }

        if (theme === Theme.LIGHT) {
            htmlElement.classList.add('light');
            htmlElement.classList.remove('dark');
        } else {
            htmlElement.classList.add('dark');
            htmlElement.classList.remove('light');
        }
    }, [value]);

    return (
        <AppContext.Provider value={{
            ...value,
            dispatch,
        }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const AppContext = React.createContext(initialValue);
