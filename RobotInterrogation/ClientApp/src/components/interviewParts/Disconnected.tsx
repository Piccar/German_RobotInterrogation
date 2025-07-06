import * as React from 'react';
import { Link } from 'react-router-dom';
import { ActionSet } from './elements/ActionSet';
import { P } from './elements/P';
import { Button, Typography } from '@material-ui/core';
import { Page } from './elements/Page';

export const Disconnected: React.FunctionComponent = () => {
    return (
        <Page>
            <Typography variant="h4" gutterBottom />
            <P>Du hast die Verbindung zum Interview verloren.</P>
            <P>Überprüfe die Internet Verbindung.</P>

            <ActionSet>
                <Button variant="outlined" component={Link} to="/">Zurück</Button>
            </ActionSet>
        </Page>
    );
}