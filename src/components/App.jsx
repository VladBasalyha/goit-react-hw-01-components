import { UserProfile } from './UserInfo/User';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './TransactionsHistory/TransactionHistory';
import transactions from '../transactions.json';
import data from '../data.json';
import user from '../user.json';
import friends from '../friends.json';
export const App = () => {
  return (
    <div>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={data} />
      <FriendList friendsList={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
