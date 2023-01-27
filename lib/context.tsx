import React, { useEffect, useState } from 'react';
import { Theme } from 'types/theme';
import { Font, predefineFonts } from 'types/font';

export enum ActionType {
    TOGGLE_THEME,
    CHANGE_THEME,
    CHANGE_FONT,
}

const initialValue = {
    theme: Theme.LIGHT,
    font: Font.MONO,
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
            case ActionType.CHANGE_THEME:
                setValue({
                    ...value,
                    theme: payload as Theme,
                });
                return;
            case ActionType.CHANGE_FONT:
                setValue({
                    ...value,
                    font: payload as Font,
                });
                return;
            default:
                return;
        }
    };

    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        dispatch(ActionType.CHANGE_THEME, isDark ? Theme.DARK : Theme.LIGHT);
    }, []);

    useEffect(() => {
        const htmlElement = window.document.querySelector('html');
        const { theme, font } = value;

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

        htmlElement.style.setProperty('--global-font-family', predefineFonts[font]);
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
