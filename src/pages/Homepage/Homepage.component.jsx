import React from "react";

import DirectoryMenu from "../../components/directory/directory.component";
import { HomepageContainer } from "./Homepage.styles";

const Homepage = () => {
  return (
    <HomepageContainer>
      <DirectoryMenu />
    </HomepageContainer>
  );
};

export default Homepage;
