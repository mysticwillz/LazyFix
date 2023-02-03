import styled from "styled-components";

import NavSection from "../Components/Home/NavSection";
import { theme } from "../Theme";

function Home() {
  return (
    <Container>
      <NavSection />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  background-color: ${theme.home_bg};
  width: 100%;
  max-width: 100%;
  height: 100vh;
  max-height: 100vh;
`;
