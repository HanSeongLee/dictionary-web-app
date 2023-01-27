import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Container from 'components/Container';
import Logo from 'components/Logo';
import DarkModeButtonContainer from 'containers/DarkModeButtonContainer';
import FontSelectContainer from 'containers/FontSelectContainer';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const Header: React.FC<IProps> = ({ className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
                {...props}
        >
            <Container className={styles.container}>
                <Logo />

                <div className={styles.rightSide}>
                    <FontSelectContainer />
                    <div className={styles.divider} />
                    <DarkModeButtonContainer />
                </div>
            </Container>
        </header>
    );
};

export default Header;
