import React, { useEffect, useState } from 'react';

export enum ActionType {
    TOGGLE_THEME,
}

const initialValue = {
    theme: 'light',
    dispatch: (actionType: ActionType, payload: unknown) => {},
};

export const AppContextWrapper: React.FC = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = (actionType: ActionType, payload: unknown) => {
        switch (actionType) {
            case ActionType.TOGGLE_THEME:
                setValue({
                    ...value,
                    theme: value.theme === 'light' ? 'dark' : 'light',
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

        if (theme === 'light') {
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
