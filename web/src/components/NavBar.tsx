import { Box, Button, Flex, Heading, Link } from "@chakra-ui/core";
import NextLink from "next/link";
import React from "react";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const { data, loading } = useMeQuery();
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const apolloClient = useApolloClient();

  let body = null;

  // loading
  if (loading) {
    body = null;
    // user not logged in
  } else if (data && !data.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={3}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    );
    // user is logged in
  } else if (data && data.me) {
    body = (
      <>
        <Flex align="center">
          <NextLink href="/mypage">
            <Link mr={4}>My Page</Link>
          </NextLink>

          <Box mr={4}>{data.me.username}</Box>

          <Button
            onClick={async () => {
              await logout();
              await apolloClient.resetStore();
            }}
            isLoading={logoutFetching}
          >
            Logout
          </Button>
        </Flex>
      </>
    );
  }
  return (
    <Flex zIndex={1} position="sticky" top={0} align="center" bg="tan" p={4}>
      <Flex flex={1} align="center" m="auto">
        <NextLink href="/">
          <Link>
            <Heading>Boilerplate</Heading>
          </Link>
        </NextLink>
        <Box ml={"auto"}>{body}</Box>
      </Flex>
    </Flex>
  );
};
