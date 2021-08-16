import PropTypes from 'prop-types'
import defaulImg from '../default-pic.jpg'
import styles from "./friend-list.module.css";

console.log(defaulImg)

export default function Friend({ avatar = defaulImg, name, isOnline }) {
    return (
        <li className={styles.friend_item}>
            <span className={isOnline ? styles.status_mark_online : styles.status_mark}></span>
            <img src={avatar} alt="User's avatar" className={styles.friend_avatar} width="48"/>
            <p>{name}</p>
        </li>
    )
}

Friend.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
};