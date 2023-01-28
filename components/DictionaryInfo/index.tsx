import React, { HTMLAttributes, useCallback, useRef } from 'react';
import styles from './style.module.scss';
import PlayIcon from 'public/icons/icon-play.svg';
import Link from 'next/link';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    dictionary: Dictionary;
}

const DictionaryInfo: React.FC<IProps> = ({
                                              dictionary: {
                                                  word, phonetic, phonetics, meanings,
                                                  sourceUrls
                                              },
                                              ...props
                                          }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const playAudio = useCallback(() => {
        if (!audioRef?.current) {
            return;
        }

        audioRef.current.play();
    }, [audioRef]);

    return (
        <div className={styles.dictionaryInfo}
             key={word}
             {...props}
        >
            <div className={styles.wordBox}>
                <div>
                    <h2 className={styles.word}>
                        {word}
                    </h2>
                    <div className={styles.phonetic}>
                        {phonetic}
                    </div>
                </div>
                {phonetics.filter(({ audio }) => audio).length > 0 && (
                    <button className={styles.playButton}
                            onClick={playAudio}
                            type={'button'}
                            arial-label={'play'}
                    >
                        <PlayIcon className={styles.playIcon} />
                    </button>
                )}
                <audio ref={audioRef}>
                    {phonetics.filter(({ audio }) => audio)
                        .map(({ audio }, index) => (
                            <source src={audio}
                                    type={'audio/mp3'}
                                    key={index}
                            />
                        ))}
                    Your browser does not support the audio element.
                </audio>
            </div>

            {meanings.map((meaning, index) => (
                <ul className={styles.meaningBox}
                    key={index}
                >
                    <div className={styles.lineText}>
                        {meaning.partOfSpeech}
                    </div>
                    <div className={styles.detailsBox}>
                        <div>
                            <div className={styles.headerText}>
                                Meaning
                            </div>
                            <ul className={styles.meaningList}>
                                {meaning.definitions.map(({ definition, example }, index) => (
                                    <li key={index}>
                                        <div className={styles.contents}>
                                            <div>
                                                {definition}
                                            </div>
                                            {example &&
                                                <div className={styles.exampleText}>
                                                    "{example}"
                                                </div>
                                            }
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {meaning.synonyms.length > 0 && (
                            <div className={styles.synonymBox}>
                                <div className={styles.headerText}>
                                    Synonyms
                                </div>
                                <ul className={styles.synonymList}>
                                    {meaning.synonyms.map((synonym, index) => (
                                        <li key={index}>
                                            <Link href={`/?q=${synonym}`}>
                                                <a>
                                                    {synonym}
                                                </a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </ul>
            ))}

            <hr />

            <div className={styles.sourceContainer}>
                <div className={styles.sourceText}>
                    Source
                </div>

                <ul className={styles.sourceUrlList}>
                    {sourceUrls.map((sourceUrl, index) => (
                        <li key={index}>
                            <a href={sourceUrl}
                               target={'_blank'}
                            >
                                <span>{sourceUrl}</span>
                                <img src={'/icons/icon-new-window.svg'}
                                     alt={''}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DictionaryInfo;
