import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Help } from './elements/Help';

interface IProps {
    position: InterviewPosition;
}

export const WaitPenalty: React.FunctionComponent<IProps> = props => {
    const msg = props.position === InterviewPosition.Interviewer
        ? <P>Warte darauf, dass der Verdächtige eine <Help entry="penalty">Strafe</Help> auswählt.</P>
        : <P>Warte darauf, dass der Interviewer eine <Help entry="penalty">Strafe</Help> verwirft.</P>
        
    return (
        <Page>
            <PositionHeader position={props.position} />
            {msg}
        </Page>
    );
}