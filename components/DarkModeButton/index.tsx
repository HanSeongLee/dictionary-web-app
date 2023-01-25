import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import MoonIcon from '/public/icons/icon-moon.svg';
import ToggleButton from 'components/ToggleButton';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    on: boolean;
}

const DarkModeButton: React.FC<IProps> = ({ on, className, ...props }) => {
    return (
        <div className={cn(styles.darkModeButtonWrapper, {
            [styles.on]: on,
        }, className)}>
            <ToggleButton on={on}
                          {...props}
            />
            <MoonIcon className={styles.icon} />
        </div>
    );
};

export default DarkModeButton;

