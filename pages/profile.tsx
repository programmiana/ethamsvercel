import { FC } from "react";
import { Container } from "./components/container";
import {
  Layout,
  LayoutFooter,
  LayoutHeader,
  LayoutMain,
} from "./components/layout";
import { Stack } from "./components/stack";

export const Profile: FC = () => {
  return (
    <Layout>
      <LayoutHeader>
        <Stack>
          <a>Info</a>
          <a>Info</a>
          <a>Info</a>
          <a>Info</a>
          <a>Info</a>
        </Stack>
      </LayoutHeader>
      <LayoutMain>
        <Container>
          <Stack>
            <h1>Welcome to Proofread</h1>
          </Stack>
        </Container>
      </LayoutMain>
      <LayoutFooter></LayoutFooter>
      <Stack></Stack>
    </Layout>
  );
};

export default Profile;
