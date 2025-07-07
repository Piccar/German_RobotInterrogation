import React from 'react';
import { Typography, Popover, makeStyles, Link } from '@material-ui/core';

type Entry = 'positions'
| 'roles'
| 'penalty'
| 'packet'
| 'inducer'
| 'background'
| 'questions'
| 'timer';

interface Props {
    entry: Entry;
}

const useStyles = makeStyles(theme => ({
    button: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'double',
        textDecorationColor: 'green',
        cursor: 'help',
        '&:hover': {
            color: 'green',
        },
    },
    popup: {
        padding: theme.spacing(2),
    },
}));

export const Help: React.FC<Props> = props => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<HTMLElement>();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(undefined);
    };
  
    const open = Boolean(anchorEl);

    const id = open ? 'help' : undefined;

    return <>
        <Link
            onClick={handleClick}
            className={classes.button}
            aria-describedby={id}
            color="inherit"
            underline="none"
        >
            {props.children}
        </Link>
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            {getContent(props.entry, classes.popup)}
        </Popover>
    </>
}

function getContent(entry: Entry, className: string): JSX.Element {
    switch (entry) {
        case 'positions':
            return <Typography className={className} component="div">
                <p>Der Interviewer muss versuchen herauszufinden, ob der Verdächtige ein Mensch oder ein Roboter ist.</p>

                <p>Der Verdächtige sollte versuchen, den Interviewer davon zu überzeugen, dass er ein Mensch ist – unabhängig von seiner wahren Identität.</p>

            </Typography>

        case 'roles':
            return <Typography className={className} component="div">
                <p>Ein menschlicher Verdächtiger hat nichts zu verbergen und keine Einschränkungen in seinem Verhalten.</p>
                <p>Ein geduldiger Roboter hat eine Einschränkung – etwas, das er nicht erwähnen darf oder kann.</p>
                <p>Ein gewalttätiger Roboter muss zwei von drei Aufgaben erfüllen, um den Interviewer töten zu können.</p>

            </Typography>

        case 'penalty':
            return <Typography className={className} component="div">
                <p>Die Strafe ist eine verdächtige Handlung, die Roboter unter Stress während des Interviews ausführen könnten.</p>

                <p>Geduldige Roboter müssen die Strafe jedes Mal ausführen, wenn sie ihre Einschränkung verletzen.</p>
                <p>Gewalttätige Roboter dürfen die Strafe zweimal im Rahmen ihrer Deprogrammierung ausführen.</p>
                <p>Menschliche Verdächtige sollten die Strafe vermeiden, da dies den Interviewer glauben lassen könnte, dass sie ein Roboter sind.</p>
            </Typography>

        case 'packet':
            return <Typography className={className} component="div">
                <p>Ein Interview-Paket ist eine Sammlung von Frageaufforderungen und dazugehörigen Roboterrollen.</p>
                <p>Es bildet das Thema des Interviews.</p>
            </Typography>

        case 'inducer':
            return <Typography className={className} component="div">
                <p>Der Interviewer stellt dem Verdächtigen eine Frage basierend auf einem einfachen Diagramm und verabreicht anschließend das Induktionsmittel. Dadurch wird dem Verdächtigen seine Rolle offenbart.</p>
                <p>Roboter sehen dasselbe Diagramm wie der Interviewer, benötigen jedoch Zeit, um die Details ihrer Rolle zu lesen.</p>
                <p>Menschen müssen ein komplizierteres Diagramm lösen, um die Frage zu beantworten.</p>

            </Typography>

        case 'background':
            return <Typography className={className} component="div">
                <p>Hintergründe geben dem Verdächtigen ein biografisches Detail, das ihm hilft, eine Figur zu improvisieren.</p>
                <p>Der Interviewer und der Verdächtige sollten so tun, als wäre der Hintergrund wirklich wahr.</p>

            </Typography>

        case 'questions':
            return <Typography className={className} component="div">
                <p>Die Fragen in einem Interview-Paket beziehen sich direkt auf die geduldigen und gewalttätigen Roboterrollen in diesem Paket.</p>
                <p>Der Interviewer kann so stark vom Text abweichen, wie er möchte, aber diese Fragen sollen helfen, typische Verhaltensmuster von Robotern zu erkennen.</p>

            </Typography>

        case 'timer':
            return <Typography className={className} component="div">
                <p>Der Interviewer hat 5 Minuten Zeit, um den Verdächtigen zu befragen. Sobald die Zeit abgelaufen ist, darf er eine letzte Frage stellen.</p>
                <p>Der Interviewer kann jederzeit zu dem Schluss kommen, dass der Verdächtige ein Roboter ist, muss jedoch warten, bis die Zeit abgelaufen ist, um ihn als Mensch einzustufen.</p>

            </Typography>
    }
}