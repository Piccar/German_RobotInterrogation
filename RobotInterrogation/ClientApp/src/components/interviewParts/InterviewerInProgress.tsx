import * as React from 'react';
import { Countdown } from './elements/Countdown';
import { IInterviewQuestion, InterviewQuestion } from './elements/InterviewQuestion';
import { useState } from 'react';
import { PositionHeader } from './elements/PositionHeader';
import { InterviewPosition } from '../interviewReducer';
import { ActionSet } from './elements/ActionSet';
import { Button } from '@material-ui/core';
import { P } from './elements/P';
import { Page } from './elements/Page';

interface IProps {
    questions: IInterviewQuestion[];
    suspectBackground: string;
    penalty: string;
    duration: number;
    conclude: (isRobot: boolean) => void;
}

export const InterviewerInProgress: React.FunctionComponent<IProps> = props => {
    const questions = props.questions.map((q, i) => <InterviewQuestion question={q} key={i} />);

    const isHuman = () => props.conclude(false);
    const isRobot = () => props.conclude(true);

    const [elapsed, setElapsed] = useState(false);
    
    const elapsedPrompt = elapsed
        ? <p>Du kannst eine letzte Frage stellen.</p>
        : <p/>;

    return <Page>
        <PositionHeader position={InterviewPosition.Interviewer} />
        <P>Stelle dem Verdächtigen Fragen und entscheide, ob er ein Mensch oder ein Roboter ist.</P>

        <div>
            {questions}
        </div>

        <P>Strafe: {props.penalty}</P>

        <P>Hintergrund des Verdächtigen: {props.suspectBackground}</P>

        <Countdown
            duration={props.duration}
            onElapsed={() => setElapsed(true)}
        />

        {elapsedPrompt}

        <ActionSet>
            <Button
                variant="outlined"
                onClick={isHuman}
                disabled={!elapsed}
                title={elapsed ? undefined : `Du kannst das Subjekt erst als menschlich einstufen, wenn die Zeit abgelaufen ist.`}
            >
                Verdächtiger ist ein Mensch

            </Button>
            <Button
                variant="outlined"
                onClick={isRobot}
            >
                Verdächtiger ist ein Roboter
            </Button>
        </ActionSet>
    </Page>
}