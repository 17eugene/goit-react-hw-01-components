import ProfileMain from "./ProfileMain";
import user from './user.json'
import styles from './profile.module.css';

export default function Profile({ children }) {
    return (
        <div className={styles.profile_card}>
            <ProfileMain
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
            />
            {children}
        </div>
    )
};