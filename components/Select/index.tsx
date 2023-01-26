import React, { HTMLAttributes, useCallback, useState } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import { Option } from 'types/select';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    options: Option[];
    onChangeValue: (value: string) => void;
}

const Select: React.FC<IProps> = ({
                                      value, options, onChangeValue, className,
                                      ...props
                                  }) => {
    const [open, setOpen] = useState<boolean>(false);

    const onToggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <div className={cn(styles.select, {
            [styles.open]: open,
        }, className)}
             onClick={onToggleOpen}
             {...props}
        >
            <div className={styles.overlay}
                 onClick={onToggleOpen}
            />
            <div className={styles.value}>
                {options.find(({ value: _value }) => _value === value)?.label} <img src={'/icons/icon-arrow-down.svg'}
                                alt={''}
            />
            </div>
            <div className={styles.optionsBox}>
                <ul className={styles.options}>
                    {options.map(({ label, value, style }, index) => (
                        <li className={cn(styles.option)}
                            onClick={_ => onChangeValue(value)}
                            style={style}
                            key={index}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Select;
