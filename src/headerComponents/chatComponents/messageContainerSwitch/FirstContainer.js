import fccss from './FirstContainer.module.css';

import TelegramIcon from '@material-ui/icons/Telegram';



let FirstContainer = ()=>{
    return (
        <div className={fccss.firstContainer}>
            <div className={fccss.messageICon}><TelegramIcon fontSize='inherit'/></div>
            <div className={fccss.tp1}>
                Your Messages
            </div>
            <div className={fccss.tp2}>
                Send private photos and messages to a friend or group.
            </div>
            <button type='button' className={fccss.btn}>Send Message</button>
        </div>
    )
}

export default FirstContainer;
