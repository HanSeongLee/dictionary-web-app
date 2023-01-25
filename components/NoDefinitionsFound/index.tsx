import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const NoDefinitionsFound: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.noDefinitionsFound, className)}
             {...props}
        >
            <div className={styles.icon}>
                😕
            </div>
            <h2 className={styles.title}>
                No Definitions Found
            </h2>
            <p className={styles.description}>
                Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.
            </p>
        </div>
    );
};

export default NoDefinitionsFound;
