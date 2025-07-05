import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { PositionHeader } from './elements/PositionHeader';
import { ActionSet } from './elements/ActionSet';
import { Page } from './elements/Page';
import { Button } from '@material-ui/core';
import { P } from './elements/P';
import { Help } from './elements/Help';
import { ValueDisplay } from './elements/ValueDisplay';

interface IProps {
    position: InterviewPosition;
    penalty: string;
    confirm?: () => void;
}

export const PenaltyCalibration: React.FunctionComponent<IProps> = props => {
    const extraMessage = [
        <P>Fordere den Verdächtigen auf, diese Strafe 3-mal auszuführen.<br />Wenn du überzeugt bist, dass er dies getan hat, klicke zum Fortfahren.</P>,
        <P>Der Interviewer wird dich nun auffordern, diese Strafe 3-mal auszuführen.</P>,
        <P>Warte darauf, dass der Verdächtige diese Strafe 3-mal ausführt.</P>

    ][props.position];

    const confirm = props.confirm
        ? (
            <ActionSet>
                <Button variant="outlined" onClick={() => props.confirm!()}>Continue</Button>
            </ActionSet>
        )
        : undefined;

    return (
        <Page>
            <PositionHeader position={props.position} />

            <ValueDisplay value={props.penalty}>Die gewählte <Help entry="penalty">Strafe</Help> ist:</ValueDisplay>

            {extraMessage}
            {confirm}
        </Page>
    )
}