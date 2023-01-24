import React, { InputHTMLAttributes, ReactNode } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, IProps>(({ icon, error, className, ...props }, ref) => {
    return (
        <>
            <div className={cn(styles.inputWrapper, {
                [styles.error]: error,
            }, className)}
            >
                <input className={cn(styles.input)}
                       {...props}
                       ref={ref}
                />
                {icon && (
                    <img className={styles.icon}
                         src={icon}
                         alt={''}
                    />
                )}
            </div>
            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </>
    );
});

export default Input;
