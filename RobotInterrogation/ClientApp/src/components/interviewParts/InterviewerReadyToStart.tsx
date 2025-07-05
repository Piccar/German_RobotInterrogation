import * as React from 'react';
import { IInterviewQuestion } from './elements/InterviewQuestion';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { SortableQuestions } from './elements/SortableQuestions';
import { ActionSet } from './elements/ActionSet';
import { Page } from './elements/Page';
import { P } from './elements/P';
import { Button } from '@material-ui/core';
import { Help } from './elements/Help';

interface IProps {
    prompt: string,
    questions: IInterviewQuestion[],
    suspectBackground: string,
    penalty: string,
    ready: () => void,
    sortQuestions: (questions: IInterviewQuestion[]) => void;
}

export const InterviewerReadyToStart: React.FunctionComponent<IProps> = props => {
    return (
        <Page>
            <PositionHeader position={InterviewPosition.Interviewer} />
            <P>Frage den Verdächtigen nach seinem Namen und bestätige dann seinen Hintergrund.<br/>Wenn du bereit bist, lies ihnen die Aufforderung vor und starte anschließend den <Help entry="timer">Timer</Help>.</P>


            <SortableQuestions
                questions={props.questions}
                sort={props.sortQuestions}
            />

            <P><Help entry="penalty">Strafe</Help>: {props.penalty}</P>
            <P>Suspect <Help entry="background">Hintergrund</Help>: {props.suspectBackground}</P>

            <P>Prompt: {props.prompt}</P>
            
            <ActionSet>
                <Button variant="outlined" color="primary" onClick={props.ready}>Starte den Timer</Button>
            </ActionSet>
        </Page>
    );
}