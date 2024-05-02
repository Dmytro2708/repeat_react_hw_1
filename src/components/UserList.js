import { Profile } from './Profile';

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Profile user={user} />
        </li>
      ))}
    </ul>
  );
};
