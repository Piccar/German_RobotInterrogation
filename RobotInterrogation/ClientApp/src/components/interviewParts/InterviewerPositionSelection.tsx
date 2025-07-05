import * as React from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { Button } from '@material-ui/core';
import { Help } from './elements/Help';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Choice } from './elements/Choice';

interface IProps {
    stay: () => void,
    swap: () => void,
}

export const InterviewerPositionSelection: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={InterviewPosition.Interviewer} />

            <P>
                Wähle deine <Help entry="positions">Position</Help> für dieses Interview:

            </P>

            <Choice>
                <Button onClick={props.stay}>Als Interviewer bleiben</Button>
                <Button onClick={props.swap}>Position wechseln und Verdächtiger werden</Button>
            </Choice>
        </Page>
    );
}