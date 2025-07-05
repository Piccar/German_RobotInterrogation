import * as React from 'react';
import { InterviewPosition } from '../interviewReducer';
import { Typography } from '@material-ui/core';
import { Page } from './elements/Page';
import { P } from './elements/P';

interface IProps {
    position: InterviewPosition;
}

export const OutcomeHumanCorrect: React.FunctionComponent<IProps> = (props) => {
    switch (props.position) {
        case InterviewPosition.Interviewer:
            return (
                <Page>
                    <P>Du hast den Verdächtigen korrekt als Mensch identifiziert.</P>
                    <Typography variant="h4">Ihr beide Gewinnt.</Typography>
                </Page>
            );

        case InterviewPosition.Suspect:
            return (
                <Page>
                    <P>Der Interviewer hat dich korrekt als Mensch identifiziert.</P>
                    <Typography variant="h4">Ihr beide Gewinnt.</Typography>
                </Page>
            );

        default:
            return (
                <Page>
                    <P>Der Interviewer hat dich korrekt als Mensch identifiziert.</P>
                    <Typography variant="h4">Ihr beide Gewinnt.</Typography>
                </Page>
            );
    }
}