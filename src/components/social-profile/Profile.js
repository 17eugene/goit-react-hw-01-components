import ProfileMain from "./ProfileMain";
import ProfileStats from "./ProfileStats";
import user from './user.json'
import styles from './profile.module.css';

export default function Profile() {
    return (
        <div className={styles.profile_card}>
            <ProfileMain
                avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
            />
            <ProfileStats stats={user.stats}/>
        </div>
    )
};