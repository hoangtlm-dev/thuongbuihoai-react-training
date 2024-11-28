import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { POSTS_URL } from "@src/constants/url";
import { getData } from "@src/helpers/fetchApi";
import type { NextPage } from "next";
import useSWR from "swr";
import { Posts } from "./posts";

const Home: NextPage = () => {
  const { data } = useSWR(POSTS_URL, getData<Posts[]>);

  return (
    <>
      <Flex alignItems="center" mb={10}>
        <Flex direction="column" background="gray.100" p={12}>
          <Heading mb={6}>Login</Heading>
          <Input
            placeholder="ht2522001@gmail.com"
            variant="filled"
            mb={3}
            type="email"
          />
          <Input
            placeholder="*********"
            variant="filled"
            mb={6}
            type="password"
          />
          <Button colorScheme="teal">Login</Button>
        </Flex>
      </Flex>
      {data?.map((post) => (
        <Box
          flexDirection="row"
          key={post.id}
          bg="white"
          width="100px"
          height="100px"
          boxShadow="-50px 50px 200px #000;">
          <Text>{post.content}</Text>
        </Box>
      ))}
    </>
  );
};

export default Home;
