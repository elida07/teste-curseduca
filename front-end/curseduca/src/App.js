import React from "react";
import styled from "styled-components";
import Filters from "./components/Filter/Filters";
import Header from "./components/Header/Header";
import NewPost from "./components/NewPost/NewPost";
import Posts from "./components/Posts/Posts";

const DivMain = styled.div`
  display: grid;
`
const DivContainer = styled.div`
  display: grid;
  grid-template-columns: 48vh 1fr;
`

function App() {
  return (
    <DivMain>
      <Header/>
      <DivContainer>
        <Filters/>
        <div>
          <NewPost/>
          <Posts/>
        </div>
      </DivContainer>
    </DivMain>
  );
}

export default App;
