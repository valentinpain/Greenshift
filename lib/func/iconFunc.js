import {FaFacebookF, FaInbox, FaInstagram, FaPhoneAlt, FaTwitch, FaTwitter, FaYoutube} from "react-icons/fa";

function getIcons(type){
    switch(type){
        case 'facebook' :
            return <FaFacebookF/>
        break;
        case 'twitter':
            return <FaTwitter/>;
        break;
        case 'instagram':
            return <FaInstagram/>;
        break;
        case 'twitch' :
            return <FaTwitch/>;
        break;
        case 'youtube':
            return <FaYoutube/>;
        break;
        case 'mail':
            return <FaInbox/>;
        break;
        case 'tel':
            return <FaPhoneAlt/>;
        break;
    }

    return null;
}

export {getIcons};