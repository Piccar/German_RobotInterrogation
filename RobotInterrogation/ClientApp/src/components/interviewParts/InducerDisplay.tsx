import * as React from 'react';
import { InterviewPosition, Direction } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { InterferenceSolution } from './elements/InterferenceSolution';
import { InterferencePattern } from './elements/InterferencePattern';
import { PacketDisplay } from './elements/PacketDisplay';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Typography } from '@material-ui/core';
import { Help } from './elements/Help';

interface IProps {
    position: InterviewPosition;
    packet: string;
    role: ISuspectRole;
    connections?: Direction[][];
    content?: string[][];
    solution?: string[];
}

export const InducerDisplay: React.FunctionComponent<IProps> = props => {
    const patternOrSolution = props.solution !== undefined
        ? <InterferenceSolution solution={props.solution} />
        : props.connections !== undefined && props.content !== undefined
            ? <InterferencePattern connections={props.connections} content={props.content} />
            : undefined;

    return (
        <Page>
            <PositionHeader position={props.position} />

            <PacketDisplay packet={props.packet} />

            <Typography>Der <Help entry="inducer">Inducer</Help> wurde ausgewählt. Deine <Help entry="roles">Rolle</Help>:</Typography>
            <SuspectRole role={props.role} />

            {patternOrSolution}

            <P>Beantworte die Frage des Interviewers basierend auf dem obigen Diagramm.<br/>Wenn du richtig antwortest, kannst du deinen <Help entry="background">Hintergrund</Help> auswählen.</P>

        </Page>
    )
}