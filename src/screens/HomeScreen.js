import React from "react";
import DirectoryMenu from "../components/directory/DirectoryMenu";
import "../styles/home.page.styles.scss";

const HomeScreen = () => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomeScreen;
