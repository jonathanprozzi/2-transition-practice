import React, { Component } from "react";
import styled from "styled-components";
import { config } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/addons";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Parallax
          config={{ tension: 150, friction: 20, precision: 0.1 }}
          pages={3}
          scrolling={true}
          vertical
          ref={ref => (this.parallax = ref)}
        >
          <ParallaxLayer offset={0}>
            <SectionContainer bgColor="#16c79e">
              <SectionTitle>Section One</SectionTitle>
              <GhostButton onClick={() => this.parallax.scrollTo(1)}>
                Layers can contain anything
              </GhostButton>
            </SectionContainer>
          </ParallaxLayer>
          <ParallaxLayer offset={1}>
            <SectionContainer bgColor="#109173">
              <SectionTitle>Section Two</SectionTitle>
              <GhostButton onClick={() => this.parallax.scrollTo(2)}>
                Layers can contain anything
              </GhostButton>
              <Parallax
                config={{ tension: 150, friction: 20, precision: 0.1 }}
                pages={3}
                scrolling={true}
                horizontal
              >
                <ParallaxLayer offset={0}>
                  <SubSectionContainer>
                    <SectionTitle>Sub 1</SectionTitle>
                    <GhostButton onClick={() => this.parallax.scrollTo(1)}>
                      ...and then? 🦄
                    </GhostButton>
                  </SubSectionContainer>
                </ParallaxLayer>
                <ParallaxLayer offset={1}>
                  <SubSectionContainer>
                    <SectionTitle>Sub 2</SectionTitle>
                    <GhostButton onClick={() => this.parallax.scrollTo(2)}>
                      ...and then? 🦄
                    </GhostButton>
                  </SubSectionContainer>
                </ParallaxLayer>
                <ParallaxLayer offset={2}>
                  <SubSectionContainer>
                    <SectionTitle>Sub 3</SectionTitle>
                    <GhostButton onClick={() => this.parallax.scrollTo(0)}>
                      ...and then? 🦄
                    </GhostButton>
                  </SubSectionContainer>
                </ParallaxLayer>
              </Parallax>
            </SectionContainer>
          </ParallaxLayer>
          <ParallaxLayer offset={2}>
            <SectionContainer bgColor="#0a5c49">
              <SectionTitle>Section Three</SectionTitle>
              <GhostButton onClick={() => this.parallax.scrollTo(0)}>
                Layers can contain anything
              </GhostButton>
            </SectionContainer>
          </ParallaxLayer>
        </Parallax>
      </AppWrapper>
    );
  }
}

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const SectionTitle = styled.h2`
  color: #dafbf3;
  font-size: 3rem;
  margin: 0;
  padding-bottom: 2rem;
`;

const SectionContainer = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SubSectionContainer = styled.div`
  background: ${props => (props.bgColor ? props.bgColor : "#2d2d2d")};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GhostButton = styled.button`
  background: rgba(218, 251, 243, 0);
  color: rgba(218, 251, 243, 1);
  border: 2px rgba(218, 251, 243, 1) solid;
  border-radius: 2rem;
  font-size: 2rem;
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(218, 251, 243, 1);
    color: #4d8f7f;
    cursor: pointer;
  }

  /* &:focus:not(:focus-visible) {
    outline: none;
  } */

  &:focus {
    outline: 0.1rem thin dotted;
  }
`;

export default App;
