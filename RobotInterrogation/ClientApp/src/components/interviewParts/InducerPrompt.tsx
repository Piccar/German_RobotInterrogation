import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { InterferenceSolution } from './elements/InterferenceSolution';
import { PacketDisplay } from './elements/PacketDisplay';
import { ActionSet } from './elements/ActionSet';
import { Help } from './elements/Help';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Button, Typography } from '@material-ui/core';

interface IProps {
    solution: string[];
    packet: string;
    continue: () => void;
}

export const InducerPrompt: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={InterviewPosition.Interviewer} />

            <PacketDisplay packet={props.packet} />

            <P>Stelle dem Verdächtigen eine Frage basierend auf der untenstehenden Sequenz und klicke anschließend unten, um das <Help entry="inducer">Induktionsmittel</Help> zu verabreichen. Dadurch wird dem Verdächtigen seine <Help entry="roles">Rolle</Help> offenbart.</P>

            
            <InterferenceSolution solution={props.solution} />

            <Typography component="div">
                Beispielfragen:
                <ul>
                    <li>Welche Buchstaben stehen zwischen A und D?</li>
                    <li>Welcher Buchstabe folgt auf B?</li>
                </ul>
            </Typography>
            
            <ActionSet>
                <Button variant="outlined" onClick={() => props.continue()}>Weiter</Button>
            </ActionSet>
        </Page>
    )
}