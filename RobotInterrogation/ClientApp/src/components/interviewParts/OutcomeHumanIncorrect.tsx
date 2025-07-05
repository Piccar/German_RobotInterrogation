import * as React from 'react';
import { ISuspectRole, SuspectRole } from './elements/SuspectRole';
import { Typography } from '@material-ui/core';
import { P } from './elements/P';
import { Page } from './elements/Page';
import { InterviewPosition } from '../interviewReducer';

interface IProps {
    position: InterviewPosition,
    role: ISuspectRole,
}

export const OutcomeHumanIncorrect: React.FunctionComponent<IProps> = props => {
    switch (props.position) {
        case InterviewPosition.Interviewer:
            let winOrLose = props.role.type === 'ViolentRobot'
                ? <Typography variant="h4">Ihr beide Verliehrt.</Typography>
                : <Typography variant="h4">Du verlierst.</Typography>

            let extra = props.role.type === 'ViolentRobot'
                ? <P>(Gewalttätige Roboter können nicht gewinnen, indem sie als menschlich zertifiziert werden. Sie gewinnen nur, indem sie ihre Aufgaben erfüllen.)</P>

                : undefined;

            return (
                <Page>
                    <P>Du hast den Verdächtigen fälschlicherweise als Mensch identifiziert.<br/>Tatsächlich ist er ein Roboter.</P>
                    {winOrLose}
                    <SuspectRole role={props.role} />
                    {extra}
                </Page>
            );

        case InterviewPosition.Suspect:
            winOrLose = props.role.type === 'ViolentRobot'
                ? <Typography variant="h4">Ihr beide Verliehrt.</Typography>
                : <Typography variant="h4">Du verlierst.</Typography>

            extra = props.role.type === 'ViolentRobot'
                ? <P>(Gewalttätige Roboter können nicht gewinnen, indem sie als menschlich zertifiziert werden. Sie gewinnen nur, indem sie ihre Aufgaben erfüllen.)</P>
                : undefined;

            return (
                <Page>
                    <P>Der Interviewer hat dich fälschlicherweise als Mensch identifiziert.</P>
                    {winOrLose}
                    <SuspectRole role={props.role} />
                    {extra}
                </Page>
            );

        default:
            winOrLose = props.role.type === 'ViolentRobot'
                ? <Typography variant="h4">Ihr beide verliehrt.</Typography>
                : <Typography variant="h4">Verdächtiger Gewinnt.</Typography>

            extra = props.role.type === 'ViolentRobot'
                ? <P>(Gewalttätige Roboter können nicht gewinnen, indem sie als menschlich zertifiziert werden. Sie gewinnen nur, indem sie ihre Aufgaben erfüllen.)</P>
                : undefined;

            return (
                <Page>
                    <P>Der Interviewer hat den Verdächtigen fälschlicherweise als Mensch identifiziert.</P>
                    {winOrLose}
                    <SuspectRole role={props.role} />
                    {extra}
                </Page>
            );
    }
}