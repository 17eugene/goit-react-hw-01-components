import PropTypes from 'prop-types';
import styles from './profile.module.css';

function ProfileStats({ stats }) {
    return (
        <ul className={styles.profile_stats}>
            <li className={styles.profile_item}>
                <span className={styles.stat_name}>Followers</span>
                <span className={styles.stat_num}>{stats.followers}</span>
            </li>
            <li className={styles.profile_item}>
                <span className={styles.stat_name}>Views</span>
                <span className={styles.stat_num}>{stats.views}</span>
            </li>
            <li className={styles.profile_item}>
                <span className={styles.stat_name}>Likes</span>
                <span className={styles.stat_num}>{stats.likes}</span>
            </li>             
        </ul>
    )
}

ProfileStats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    })
};

export default ProfileStats;