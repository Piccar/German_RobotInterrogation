import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { PacketDisplay } from './elements/PacketDisplay';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Help } from './elements/Help';

interface IProps {
    position: InterviewPosition;
    packet: string;
}

export const InducerWait: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={props.position} />

            <PacketDisplay packet={props.packet} />

        <P>Der Interviewer wird dir eine Frage stellen und anschließend das <Help entry="inducer">Induktionsmittel</Help> verabreichen.</P>
        <P>Du wirst deine <Help entry="roles">Rolle</Help> für dieses Interview sehen sowie ein Diagramm, das du zur Beantwortung der Frage benötigst.</P>
        <P>Beantworte die Frage korrekt, um deinen <Help entry="background">Hintergrund</Help> auswählen zu können.</P>

        </Page>
    )
}