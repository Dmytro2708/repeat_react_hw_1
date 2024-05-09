import { UserList } from './UserList/UserList';

import users from '../users.json';

import { GiAbstract010 } from "react-icons/gi";

import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';



const PageTitle = styled.h1`
margin-top: auto;
margin-bottom: 30px;
color: ${props=>{
  // console.log(props);
    switch (props.$variant) {
    case "primary":
      return 'red';
      case "secondary":
      return 'orange'; 
        
    default:
      return 'green';
  }
}};
`;


export const App = () => {
  return (
    <div>
      <PageTitle $variant= "primary">1 USERS <GiAbstract010 /></PageTitle>
      <PageTitle $variant= "secondary">2 USERS <GiAbstract010 /></PageTitle>
      <PageTitle>3 USERS <GiAbstract010 /></PageTitle>

      <UserList users={users} />

      

      <GlobalStyle/>
    </div>
  );
};
