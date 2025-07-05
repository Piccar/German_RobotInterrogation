import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Help } from './elements/Help';

interface IProps {
    position: InterviewPosition,
}

export const WaitPacketSelection: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={props.position} />
            <P>Warte darauf, dass der Interviewer ein Interview-<Help entry="packet">Paket</Help> auswählt.</P>
        </Page>
    );
}