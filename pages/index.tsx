import type { NextPage } from 'next'
import styles from './style.module.scss';
import Header from 'components/Header';
import Container from 'components/Container';
import DictionarySearchContainer from 'containers/DictionarySearchContainer';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
    const router = useRouter();
    const { q } = router.query;

    return (
        <>
            <main className={styles.main}>
                <Header />
                <Container>
                    <DictionarySearchContainer className={styles.dictionarySearchContainer}
                                               query={q as string}
                    />
                </Container>
            </main>
        </>
    );
};

export default Home
