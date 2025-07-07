import * as React from 'react';
import { Link } from 'react-router-dom';
import { inCompatibilityMode, setCompatibilityMode } from 'src/Connectivity';
import { useState } from 'react';
import { Typography, Button, Link as A, makeStyles } from '@material-ui/core';
import { ActionSet } from './interviewParts/elements/ActionSet';
import { Page } from './interviewParts/elements/Page';
import { P } from './interviewParts/elements/P';

const useStyles = makeStyles(theme => ({
    compatibility: {
        marginTop: '1.5em',
    },
}));

export const About: React.FunctionComponent = () => {
    const [toggle, setToggle] = useState(false);

    const toggleCompatibility = () => {
        setCompatibilityMode(!inCompatibilityMode());
        setToggle(!toggle);
    }

    const toggleText = inCompatibilityMode()
        ? 'Kompatibilitätsmodus deaktivieren'
        : 'Kompatibilitätsmodus aktivieren';

    const classes = useStyles();

    return (
        <Page>
            <Typography variant="h2" gutterBottom>Robot Interrogation</Typography>

            <P>Dieses Spiel ist ein Gespräch zwischen zwei Spielern, einem Interviewer und einem Verdächtigen. Es sollte entweder von zwei Personen im selben Raum oder über einen Drittanbieter-Videocall gespielt werden.</P>

            <P>Der Verdächtige muss den Interviewer davon überzeugen, dass er ein Mensch ist. Der Interviewer muss feststellen, ob er ein Roboter ist. Roboter haben seltsame Persönlichkeitsmerkmale, aber das tun Menschen unter Druck auch...</P>

            <P>Dies ist die deutsche Onlineversion von <A href="https://robots.management" target="_blank">Inhuman Conditions</A>, ein Spiel von Tommy Maranges und Cory O'Brien, welches gratis erreichbar ist unter <A href="">Creative Commons license BY-NCA-SA-4.0</A>.</P>
            
            <P>Inhuman Conditions' <A href="https://www.dropbox.com/s/9ledq11mc3nd15f/Inhuman%20Conditions%20Rulebooks%20%28Public%20File%29.pdf?dl=0" target="_blank">Regeln sind hier verfügbar</A>. Alternativ gibt es <A href="https://www.youtube.com/watch?v=EBDX7-cTJZ4" target="_blank">hier ein Video</A></P>



            <P>Wenn du interessiert bist, kannst du <A href="https://github.com/Piccar/RobotInterrogation" target="_blank">den Quellcode</A> dieses Projekts auf GitHub ansehen. Melden dich bei Problemen dort.</P>

            <P> Der Originale Quellcode von FTWinston findest du <A href="https://github.com/FTWinston/RobotInterrogation" target="_blank">hier! </A> </P>

            <ActionSet>
                <Button variant="outlined" component={Link} to="/">Zurück</Button>
            </ActionSet>

            <Typography className={classes.compatibility}>
                Verbindungs Probleme?&nbsp;
                <Button color="secondary" onClick={toggleCompatibility}>{toggleText}</Button>
            </Typography>
        </Page>
    )
}
