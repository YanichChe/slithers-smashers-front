import React from "react";
import losePng from "../../images/lose.png"

class FailStatusMessage extends React.Component {

    render() {
        const handleButton = (e) => {
            window.location.assign('http://localhost:3000');
        }
        const {points} = this.props;

        return (
            <div style={styles.container}>
                <img src={losePng}/>
                <p style={styles.title}> Total Score</p>
                <p style={styles.score}>{points}</p>
                <button class="glow-on-hover" type="button" onClick={handleButton}>Back</button>
            </div>
        );
    }
}

const styles = {
    container: {
        position: 'relative',
        background: '#A2D149',
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        justifyContent: 'center'
    },
    overlay: {
        top: '50%',
        transform: 'translate(-50%, -50%)',
        paddingBottom: '20px',
        borderRadius: '5px',
        fontSize: '16px',
    },
    title: {
        fontFamily: 'Fascinate Inline',
        fontSize: '25px',
        textAlign: 'center',
        color: '#fffcfc',
    },

    score: {
        fontFamily: 'Fascinate Inline',
        fontSize: '20px',
        textAlign: 'center',
        color: '#ffffff',
    }
};

export default FailStatusMessage;
