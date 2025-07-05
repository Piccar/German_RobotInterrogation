import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Link as A } from '@material-ui/core';
import { ActionSet } from './interviewParts/elements/ActionSet';
import { Page } from './interviewParts/elements/Page';
import { P } from './interviewParts/elements/P';

export const Home: React.FunctionComponent = () => {
    return (
        <Page>
            <Typography variant="h2" gutterBottom>Robot Interrogation</Typography>

            <P>Kannst du herrausfinden wer ein Roboter ist und wer nicht? Dies ist die deutsche online Version von <A href="https://robots.management" target="_blank">Inhuman Conditions</A>, ein Spiel von Tommy Maranges und Cory O'Brien.</P>


            <ActionSet>
                <Button variant="outlined" component={Link} to="/about">Information</Button>
                <Button variant="outlined" color="primary" component={Link} to="/host">Starten</Button>
            </ActionSet>
        </Page>
    );
}
