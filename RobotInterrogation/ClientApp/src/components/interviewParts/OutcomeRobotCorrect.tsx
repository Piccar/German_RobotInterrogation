import * as React from 'react';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Typography } from '@material-ui/core';
import { InterviewPosition } from '../interviewReducer';

interface IProps {
    position: InterviewPosition,
    role: ISuspectRole,
}

export const OutcomeRobotCorrect: React.FunctionComponent<IProps> = (props) => {
    switch (props.position) {
        case InterviewPosition.Interviewer:
            return (
                <Page>
                    <P>Du hast den Verdächtigen korrekt als Roboter identifiziert.</P>
                    <Typography variant="h4">You win.</Typography>
                    <SuspectRole role={props.role} />
                </Page>
            );

        case InterviewPosition.Suspect:
            return (
                <Page>
                    <P>Der Interviewer hat dich korrekt als Roboter identifiziert.</P>
                    <Typography variant="h4">You lose.</Typography>
                    <SuspectRole role={props.role} />
                </Page>
            );

        default:
            return (
                <Page>
                    <P>Der Interviewer hat den Verdächtigen korrekt als Roboter identifiziert.</P>
                    <Typography variant="h4">Interviewer wins.</Typography>
                    <SuspectRole role={props.role} />
                </Page>
            );
    }
}