import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub icon from MUI
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    githubButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: '10px 15px',
        borderRadius: '25px',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: '#555',
        }
    },
    githubLogo: {
        marginRight: '10px'
    }
});

export default function GitHubButton() {
    const classes = useStyles();

    return (
        <a href="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME" target="_blank" rel="noopener noreferrer" className={classes.githubButton}>
            <GitHubIcon className={classes.githubLogo} />
            <span>Check the Code</span>
        </a>
    );
}
