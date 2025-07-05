import * as React from 'react';
import { Countdown } from './elements/Countdown';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { useState } from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { ActionSet } from './elements/ActionSet';
import { P } from './elements/P';
import { Button } from '@material-ui/core';
import { Page } from './elements/Page';

interface IProps {
    suspectBackground: string;
    penalty: string;
    role: ISuspectRole;
    duration: number;
    terminateInterviewer: () => void;
}

export const SuspectInProgress: React.FunctionComponent<IProps> = props => {
    const terminate = props.role.type === 'ViolentRobot'
        ? (
            <ActionSet>
                <Button variant="outlined" color="secondary" onClick={props.terminateInterviewer}>Töte den Interviewer</Button>
            </ActionSet>
        )
        : undefined;
    
    const robotPrompt = props.role.type === 'ViolentRobot'
        ? <>
            <P>Du musst 2 der 3 unten aufgeführten Aufgaben erledigen und <em>danach 10 Sekunden warten</em>, bevor du den Interviewer töten kannst.</P>
            <P>Wenn du den Interviewer nicht töten kannst, bevor du seine letzte Frage beantwortet hast, musst du sichtbar Fehlfunktionen zeigen.</P>
        </>
        : props.role.type === 'PassiveRobot'
            ? <P>Du musst die Strafe jedes Mal ausführen, wenn du deine Verwundbarkeit verletzt.</P>
            : undefined;

    const [elapsed, setElapsed] = useState(false);

    const elapsedPrompt = elapsed
        ? <P>Der Interviewer kann eine letzte Frage stellen.</P>
        : <P/>;

    return <Page>
        <PositionHeader position={InterviewPosition.Suspect} />
        <P>Beantworte die Fragen des Interviewers und versuche, ihn davon zu überzeugen, dass du ein Mensch bist.</P>
        {robotPrompt}

        <SuspectRole role={props.role} />
        
        <P>Strafe: {props.penalty}</P>
        
        <P>Dein Hintergrund: {props.suspectBackground}</P>

        <Countdown
            duration={props.duration}
            onElapsed={() => setElapsed(true)}
        />

        {elapsedPrompt}

        {terminate}
    </Page>
}