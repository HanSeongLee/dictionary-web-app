import React, { useEffect, useState } from 'react';
import { Font, predefineFonts } from 'types/font';

export enum ActionType {
    CHANGE_FONT,
}

const initialValue = {
    font: Font.SANS_SERIF,
    dispatch: (actionType: ActionType, payload: unknown) => {},
};

export const FontContextWrapper: React.FC = ({ children }) => {
    const [value, setValue] = useState(initialValue);

    const dispatch = (actionType: ActionType, payload: unknown) => {
        switch (actionType) {
            case ActionType.CHANGE_FONT: {
                const newFont = payload as Font;
                setValue({
                    ...value,
                    font: newFont,
                });
                window.localStorage.setItem('font', newFont.toString());
                return;
            }
            default:
                return;
        }
    };

    useEffect(() => {
        const localFont = window.localStorage.getItem('font');
        let font = localFont && localFont !== 'undefined' ? localFont as Font : Font.SANS_SERIF;

        dispatch(ActionType.CHANGE_FONT, font);
    }, []);

    useEffect(() => {
        const htmlElement = window.document.querySelector('html');
        const { font } = value;

        if (!htmlElement) {
            return;
        }

        htmlElement.style.setProperty('--global-font-family', predefineFonts[font]);
    }, [value]);

    return (
        <FontContext.Provider value={{
            ...value,
            dispatch,
        }}
        >
            {children}
        </FontContext.Provider>
    );
};

export const FontContext = React.createContext(initialValue);
