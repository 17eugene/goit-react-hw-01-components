// import Friend from "./components/friend-list/Friend";
import FriendsList from "./components/friend-list/FriendsList";
import friends from './components/friend-list/friends.json';

import Profile from "./components/social-profile/Profile";
// import ProfileStats from "./components/social-profile/ProfileStats";
// import userProfile from "./components/social-profile/user.json";

import Statistic from "./components/statistics/Statistics";
import statisticData from "./components/statistics/statistical-data.json";

import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "./components/transactions/transactions.json";


export default function App() {
    return (
        <div>
            <FriendsList friends={friends}/>
    
            <Profile/>


            <Statistic title='Upload Stats' stats={statisticData}/>
            

            <TransactionHistory items={transactions}/>
        </div>
    )
};


