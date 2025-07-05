import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { Help } from './elements/Help';
import { P } from './elements/P';
import { Page } from './elements/Page';
import { ChoiceArray } from './elements/ChoiceArray';

interface IProps {
    turn: InterviewPosition,
    options: string[],
}

export const SpectatorPenaltySelection: React.FunctionComponent<IProps> = props => {
    const message = props.turn === InterviewPosition.Interviewer
        ? <P>Warte darauf, dass der Interviewer eine <Help entry="penalty">Strafe</Help> <strong>verwirft</strong>.</P>
        : <P>Warte darauf, dass der Verdächtige eine <Help entry="penalty">Strafe</Help> <strong>auswählt</strong>.</P>


    return (
        <Page>
            <PositionHeader position={InterviewPosition.Spectator} />
            {message}
            
            <ChoiceArray options={props.options} />
        </Page>
    );
}
