import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";

// Material UI
import { MobileStepper as MuiMobileStepper } from "@mui/material";

// Components
import Review from "../components/Review";

// Data
import { clientReviews } from "../DummyData";

interface SuccessStoriesScreenProps {
  isDesktop: boolean;
}

const Container = styled.div<SuccessStoriesScreenProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.isDesktop ? "989px" : "calc(100% - 32px)")};
  align-self: center;
  ${(props) => !props.isDesktop && "margin: 0 16px;"}
  margin-bottom: 40px;
`;

const Title = styled.h3<SuccessStoriesScreenProps>`
  align-self: center;
  font-size: ${(props) => (props.isDesktop ? "24px" : "20px")};
  line-height: ${(props) => (props.isDesktop ? "32px" : "28px")};
  margin: 0;
  margin-bottom: 24px;
`;

const ReviewContainer = styled.div<SuccessStoriesScreenProps>`
  display: flex;
  flex-direction: ${(props) => (props.isDesktop ? "row" : "column")};
  justify-content: space-between;
`;

const MobileStepper = muiStyled(MuiMobileStepper)`
  max-width: 400px;
  flex-grow: 1;
  justify-content: center;
  margin-top: 16px;

  & .MuiMobileStepper-dot {
    background-color: transparent;
    border: 1px solid #22222C;
    box-sizing: border-box;
  }

  & .MuiMobileStepper-dotActive {
    background-color: #22222C;
  }
  
`;

const SuccessStoriesScreen: React.FC<SuccessStoriesScreenProps> = ({
  isDesktop,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  const style = {
    noOverflow: {
      overflow: "visible",
    },
  };

  return (
    <Container isDesktop={isDesktop}>
      <Title isDesktop={isDesktop}>Hear success stories from our clients</Title>
      {/* https://mui.com/material-ui/react-stepper/#text-with-carousel-effect */}
      {/* https://github.com/oliviertassinari/react-swipeable-views */}
      {isDesktop ? (
        <ReviewContainer isDesktop={isDesktop}>
          {clientReviews.map((client) => (
            <Review
              nameNAge={client.nameNAge}
              location={client.location}
              rating={client.rating}
              image={client.image}
              content={client.content}
              key={client.id.toString()}
            />
          ))}
        </ReviewContainer>
      ) : (
        <ReviewContainer isDesktop={isDesktop}>
          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            slideStyle={style.noOverflow}
          >
            {clientReviews.map((client) => (
              <Review
                nameNAge={client.nameNAge}
                location={client.location}
                rating={client.rating}
                image={client.image}
                content={client.content}
                key={client.id.toString()}
              />
            ))}
          </SwipeableViews>
          <MobileStepper
            variant="dots"
            steps={clientReviews.length}
            position="static"
            activeStep={activeStep}
            nextButton={null}
            backButton={null}
          />
        </ReviewContainer>
      )}
    </Container>
  );
};

export default SuccessStoriesScreen;
