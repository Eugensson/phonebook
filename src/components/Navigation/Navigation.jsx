import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import LoginIcon from '@mui/icons-material/Login';

import {
  NavigationContainer,
  NavigationList,
  HeaderNav,
  NavigationItem,
  NavigationLink,
  ContactsLink,
  UserMenuWrapper,
} from './Navigation.styled';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelectors } from 'hooks/UseSelector';
import Loader from 'components/Loader/Loader';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();
  return (
    <>
      <NavigationContainer>
        <HeaderNav>
          <NavigationList>
            {isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">
                    <HomeIcon fontSize="large"/>
                    Home
                  </ContactsLink>
                  <ContactsLink to="/contacts">
                    <ContactPhoneIcon fontSize="large"/>
                    Contacts
                  </ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenu />
                </NavigationItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">
                    <HomeIcon fontSize="large"/>
                  </ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenuWrapper>
                    <NavigationLink to="/register">
                      <GroupAddIcon fontSize="large"/>
                    </NavigationLink>
                    <NavigationLink to="/login">
                      <LoginIcon fontSize="large"/>
                    </NavigationLink>
                  </UserMenuWrapper>
                </NavigationItem>
              </>
            )}
          </NavigationList>
        </HeaderNav>
      </NavigationContainer>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
