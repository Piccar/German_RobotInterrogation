import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { InterviewPosition } from '../interviewReducer';

interface IProps {
    position: InterviewPosition;
}

export const OutcomeRobotIncorrect: React.FunctionComponent<IProps> = (props) => {
    switch (props.position) {
        case InterviewPosition.Interviewer:
            return (
                <Page>
                    <P>Du hast den Verdächtigen fälschlicherweise als Roboter identifiziert.<br />Tatsächlich ist er ein Mensch.</P>
                    <Typography variant="h4">You both lose.</Typography>
                </Page>
            );

        case InterviewPosition.Suspect:
            return (
                <Page>
                    <P>Der Interviewer hat dich fälschlicherweise als Roboter identifiziert.</P>
                    <Typography variant="h4">You both lose.</Typography>
                </Page>
            );

        default:
            return (
                <Page>
                    <P>Der Interviewer hat den Verdächtigen fälschlicherweise als Roboter identifiziert.</P>
                    <Typography variant="h4">They both lose.</Typography>
                </Page>
            );
    }
}