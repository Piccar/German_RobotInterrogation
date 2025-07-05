import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { InterferenceSolution } from './elements/InterferenceSolution';
import { PacketDisplay } from './elements/PacketDisplay';
import { ActionSet } from './elements/ActionSet';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Button } from '@material-ui/core';
import { Help } from './elements/Help';

interface IProps {
    solution: string[];
    packet: string;
    correct: () => void;
    incorrect: () => void;
}

export const InducerResponse: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={InterviewPosition.Interviewer} />

            <PacketDisplay packet={props.packet} />

            <P>Das <Help entry="inducer">Induktionsmittel</Help> wurde verabreicht.</P>

            <InterferenceSolution solution={props.solution} />

            <P>Warte auf die Antwort des Verdächtigen auf deine Frage und gib dann an, ob seine Antwort korrekt ist. Wenn sie korrekt ist, darf er seinen <Help entry="background">Hintergrund</Help> auswählen.</P>

            <ActionSet>
                <Button variant="outlined" onClick={() => props.correct()}>Korrekte Antwort</Button>
                <Button variant="outlined" onClick={() => props.incorrect()}>Falsche Antwort</Button>
            </ActionSet>

        </Page>
    )
}