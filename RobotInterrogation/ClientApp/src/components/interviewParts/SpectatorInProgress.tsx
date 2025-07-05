import * as React from 'react';
import { Countdown } from './elements/Countdown';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { useState } from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { P } from './elements/P';
import { Page } from './elements/Page';

interface IProps {
    suspectBackground: string;
    penalty: string;
    role: ISuspectRole;
    duration: number;
}

export const SpectatorInProgress: React.FunctionComponent<IProps> = props => {
    const robotPrompt = props.role.type === 'ViolentRobot'
        ? <>
            
            <P>Der Verdächtige muss 2 der 3 unten aufgeführten Aufgaben erledigen und <em>danach 10 Sekunden warten</em>, bevor er den Interviewer töten kann.</P>
            <P>Wenn sie den Interviewer nicht töten können, bevor sie ihre letzte Frage beantwortet haben, müssen sie sichtbar Fehlfunktionen zeigen.</P>

        </>
        : props.role.type === 'PassiveRobot'
            ? <P>Der Verdächtige muss die Strafe jedes Mal ausführen, wenn er seine Verwundbarkeit verletzt.</P>
            : undefined;

    const [elapsed, setElapsed] = useState(false);

    const elapsedPrompt = elapsed
        ? <P>Der Interviewer kann eine letzte Frage stellen.</P>
        : <P/>;

    return <Page>
        <PositionHeader position={InterviewPosition.Spectator} />
        <P>Während der Beantwortung der Fragen des Interviewers wird der Verdächtige versuchen, ihn davon zu überzeugen, dass er ein Mensch ist.</P>
        {robotPrompt}

        <SuspectRole role={props.role} />
        
        <P>Penalty: {props.penalty}</P>
        
        <P>Suspect background: {props.suspectBackground}</P>

        <Countdown
            duration={props.duration}
            onElapsed={() => setElapsed(true)}
        />

        {elapsedPrompt}
    </Page>
}
