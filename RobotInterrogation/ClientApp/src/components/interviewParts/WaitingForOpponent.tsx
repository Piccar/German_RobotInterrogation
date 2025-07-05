import * as React from 'react';
import './GameLink.css';
import { Typography, Link } from '@material-ui/core';
import { Page } from './elements/Page';
import { P } from './elements/P';

interface IProps {
    interviewID: string;
}

export const WaitingForOpponent: React.FunctionComponent<IProps> = props => {
    const fullLocation = document.location.toString();
    const strippedProtocol = fullLocation.substr(fullLocation.indexOf('//') + 2);

    const fixedLocation = addWordBreaks(
        strippedProtocol.substr(0, strippedProtocol.indexOf(props.interviewID)),
        char => char === '/' || char === '.'
    );
    const detailLocation = addWordBreaks(
        props.interviewID,
        char => char === char.toUpperCase()
    );

    return (
        <Page>
            <Typography variant="h4" gutterBottom>Warte darauf, dass der Gegenüber beitritt</Typography>


            <P>Lade einen Partner ein, indem du ihm diesen Link gibst:</P>


            <P>
                <Link target="_blank" className="gameLink" href={fullLocation}>{fixedLocation}<wbr/><span className="gameLink__focus">{detailLocation}</span></Link>
            </P>

            <P>
                Öffne den Link <strong>nicht</strong> selbst, sonst wirst du dein eigener Gegner.

            </P>
        </Page>
    );
}

function addWordBreaks(text: string, shouldBreak: (char: string) => boolean) {
    const results: JSX.Element[] = [];

    let word = '';
    let i = 0;

    for (const char of text) {
        if (shouldBreak(char) && word.length > 0) {
            if (results.length > 0) {
                results.push(
                    <React.Fragment key={i++}>
                        <wbr/>
                        {word}
                    </React.Fragment>
                )
            }
            else {
                results.push(
                    <React.Fragment key={i++}>
                        {word}
                    </React.Fragment>
                )
            }
            
            word = '';
        }

        word = word + char;
    }
    
    if (word.length > 0) {
        results.push(
            <React.Fragment key={i++}>
                <wbr/>
                {word}
            </React.Fragment>
        );
    }

    return results;
}