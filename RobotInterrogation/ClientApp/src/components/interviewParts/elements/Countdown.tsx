import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import './Countdown.css';
import { Fab, makeStyles } from '@material-ui/core';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty';
import HourglassFull from '@material-ui/icons/HourglassFull';

interface IProps {
    duration: number;
    onElapsed?: () => void;
}
var triggerbool = false;

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: 'absolute',
        left: 'calc(100% - 6.5em)',
        top: '0.25em',
    },
    main: {
        position: 'fixed',
        paddingRight: '1em',
        pointerEvents: 'none',
    },
    expired: {
        animation: 'blinker 1s step-start infinite',
    },
    icon: {
        paddingRight: '0.15em',
    },
}));

export const Countdown: React.FC<IProps> = ({ duration, onElapsed }) => {
    const classes = useStyles();

    const [timeRemaining, setTimeRemaining] = useState(duration);
    const [started, setStarted] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Startsound abspielen und danach Countdown starten
    useEffect(() => {
        const intro = new Audio('/sounds/start.mp3');

        const handleStart = () => {
            setStarted(true);
        };

        intro.addEventListener('ended', handleStart);

        intro.play().catch(err => {
            console.warn("Startsound konnte nicht abgespielt werden:", err);
            // Fallback nach 5s
            setTimeout(() => setStarted(true), 5000);
        });

        return () => {
            intro.removeEventListener('ended', handleStart);
        };
    }, []);

    // Countdown-Logik
    useEffect(() => {
        if (!started) return;

        intervalRef.current = setInterval(() => {
            setTimeRemaining(curr => {
                const newVal = curr - 1;

                // 🔊 Minutenansage genau bei 3:00, 2:00, 1:00, ...
                if (newVal > 0 && newVal % 60 === 0) {
                    const minutesLeft = newVal / 60;
                    const minuteSound = new Audio(`/sounds/minute-${minutesLeft}.mp3`);
                    minuteSound.play().catch(err =>
                        console.warn(`Minute-${minutesLeft} konnte nicht abgespielt werden.`, err)
                    );
                }

                // 🔊 Letzte 10 Sekunden
                if (newVal <= 10 && newVal > 0) {
                    const secondSound = new Audio(`/sounds/second-${newVal}.mp3`);
                    secondSound.play().catch(err =>
                        console.warn(`Second-${newVal} konnte nicht abgespielt werden.`, err)
                    );
                }

                // 🔔 Countdown beendet
                if (newVal <= 0 && triggerbool == false) {
                    triggerbool=true;
                    clearInterval(intervalRef.current!);
                    intervalRef.current = null;

                    const doneSound = new Audio('/sounds/done.mp3');
                    doneSound.play().catch(err =>
                        console.warn("Done-Sound konnte nicht abgespielt werden.", err)
                    );

                    onElapsed?.();
                    return 0;
                }

                return Math.max(newVal, 0);
            });
        }, 1000);

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [started, onElapsed]);

    const elapsed = timeRemaining <= 0;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = String(timeRemaining % 60).padStart(2, '0');

    const color = elapsed ? 'secondary' : 'primary';

    const mainClasses = elapsed
        ? `${classes.main} ${classes.expired}`
        : classes.main;

    const icon = elapsed
        ? <HourglassEmpty className={classes.icon} />
        : <HourglassFull className={classes.icon} />

    return (
        <div className={classes.wrapper}>
            <Fab size="small" color={color} className={mainClasses} variant="extended">
                {icon}
                {minutes}:{seconds}
            </Fab>
        </div>
    );
};
