import React, { ButtonHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    on: boolean;
}

const ToggleButton: React.FC<IProps> = ({ on, className, ...props }) => {
    return (
        <button className={cn(styles.toggleButton, {
            [styles.on]: on,
        }, className)}
                type={'button'}
                aria-label={'toggle button'}
                {...props}
        />
    );
};

export default ToggleButton;
