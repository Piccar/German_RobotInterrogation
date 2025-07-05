import * as React from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Help } from './elements/Help';
import { ChoiceArray } from './elements/ChoiceArray';

interface IProps {
    options: string[],
    action: (index: number) => void,
}

export const InterviewerPenaltySelection: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={InterviewPosition.Interviewer} />
            <P>Wähle eine der folgenden <Help entry="penalty">Strafen</Help> zum <strong>Verwerfen</strong> aus. Der Verdächtige wählt dann aus den verbleibenden zwei.</P>


            <ChoiceArray options={props.options} action={props.action} />
        </Page>
    );
}