import React from "react";
import "./homepage.styles.scss";

import { HomePageContainer } from "./homepage.style";
import Directory from "../../components/directory/directory.component";

const HomePage = ({ history }) => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
