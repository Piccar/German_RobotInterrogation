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

export const SuspectReadyToStart: React.FunctionComponent<IProps> = props => {
    const robotPrompt = props.role.type === 'ViolentRobot'
        ? <P>Du musst 2 der 3 unten aufgeführten Aufgaben erledigen und <em>danach 10 Sekunden warten</em>, bevor du den Interviewer töten kannst.</P>
        : props.role.type === 'PatientRobot'
            ? <P>Du musst die Strafe jedes Mal ausführen, wenn du deine Verwundbarkeit verletzt.</P>
            : undefined;

    return (
        <Page>
            <PositionHeader position={InterviewPosition.Suspect} />
            <P>Sobald sie den <Help entry="timer">Timer</Help> starten, wird der Interviewer dir eine Reihe von <Help entry="questions">Fragen</Help> stellen, um zu versuchen, festzustellen, ob du ein Mensch oder ein Roboter bist.</P>


            {robotPrompt}

            <SuspectRole role={props.role} />
            
            <P><Help entry="penalty">Strafe</Help>: {props.penalty}</P>
            <P>Verdächtiger <Help entry="background">hintergrund</Help>: {props.suspectBackground}</P>
        </Page>
    );
}