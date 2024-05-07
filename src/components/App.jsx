import { UserList } from './UserList';

import users from '../users.json';

import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

const PageTitle = styled.h1`
margin-top: auto;
margin-bottom: 30px;
color: orange;
`;


export const App = () => {
  return (
    <div>
      <PageTitle>USERS</PageTitle>
      <UserList users={users} />

      

      <GlobalStyle/>
    </div>
  );
};
