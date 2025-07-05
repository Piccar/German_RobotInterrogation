import * as React from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { Help } from './elements/Help';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { ChoiceArray } from './elements/ChoiceArray';

interface IProps {
    options: string[],
    action: (index: number) => void,
}

export const SuspectPenaltySelection: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={InterviewPosition.Suspect} />
            <P>Wähle eine der folgenden <Help entry="penalty">Strafen</Help> aus, die du für dieses Interview <strong>anwenden</strong> möchtest.</P>
            
            <ChoiceArray options={props.options} action={props.action} />
        </Page>
    );
}