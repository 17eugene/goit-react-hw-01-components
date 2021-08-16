import Friend from "./Friend";
import PropTypes from "prop-types";
import styles from "./friend-list.module.css";


function FriendsList({ friends }) {
    return (
        <ul className={styles.friend_list}>
            {friends.map(friend => (
                <Friend
                    key={friend.id}
                    isOnline={friend.isOnline}
                    name={friend.name}
                    avatar={friend.avatar}
                />
            ))}
        </ul>
    )
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
};

export default FriendsList;