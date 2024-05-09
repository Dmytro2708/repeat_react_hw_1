import { Profile } from '../Profile/Profile';
import { List } from './UserList.styled';

export const UserList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <li key={user.id}>
          <Profile user={user} />
        </li>
      ))}
    </List>
  );
};
