import { useLogoutMutation } from '@/features/auth/hooks/useLogoutMutation.ts';
import { Button, Flex } from '@mantine/core';

import { Logo } from '../Logo/Logo.tsx';
import styles from './Header.module.css';

export function Header({ children }: React.PropsWithChildren) {
  const mutation = useLogoutMutation();

  function handleLogout() {
    mutation.mutate();
  }

  return (
    <Flex
      align="center"
      mt={24}
      mb={32}
      justify="center"
      className={styles.header}
    >
      {children}
      <Logo />
      <Button onClick={handleLogout}>Log out</Button>
    </Flex>
  );
}
