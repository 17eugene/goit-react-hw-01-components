import PropTypes from 'prop-types';
import styles from './profile.module.css';

export default function ProfileMain({ name, tag, location, avatar }) {
    return (
        <div className={styles.profile_main}>
            <img src={avatar} alt="User's avatar" width="120" className={styles.profile_avatar}/>
            <p className={styles.profile_name}>{name}</p>
            <p className={styles.profile_tag}>{tag}</p>
            <p className={styles.profile_location}>{location}</p>
        </div>
    )
};

ProfileMain.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
};