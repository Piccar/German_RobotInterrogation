import * as React from 'react';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Help } from './elements/Help';

interface IProps {
    suspectBackground: string,
    penalty: string,
    role: ISuspectRole,
}

export const SpectatorReadyToStart: React.FunctionComponent<IProps> = props => {
    const robotPrompt = props.role.type === 'ViolentRobot'
        ? <P>Der Verdächtige muss 2 der 3 unten aufgeführten Aufgaben erledigen und <em>danach 10 Sekunden warten</em>, bevor er den Interviewer töten kann.</P>
        : props.role.type === 'PatientRobot'
            ? <P>Der Verdächtige muss die Strafe jedes Mal ausführen, wenn er seine Verwundbarkeit verletzt.</P>
            : undefined;

    return (
        <Page>
            <PositionHeader position={InterviewPosition.Spectator} />
            <P>Sobald sie den <Help entry="timer">Timer</Help> starten, wird der Interviewer dem Verdächtigen eine Reihe von <Help entry="questions">Fragen</Help> stellen, um zu versuchen, festzustellen, ob er ein Mensch oder ein Roboter ist.</P>

            {robotPrompt}

            <SuspectRole role={props.role} />
            
            <P><Help entry="penalty">Strafe</Help>: {props.penalty}</P>
            <P>Verdächtiger <Help entry="background">Hintergrund</Help>: {props.suspectBackground}</P>
        </Page>
    );
}