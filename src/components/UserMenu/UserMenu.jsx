import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import { UserBox, Text, Button } from './UserMenu.Styled';
import { logOut } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUsername);

  return (
    <UserBox>
      <Text>Welcome, {name} </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserBox>
  );
};
