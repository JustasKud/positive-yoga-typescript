import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import MobileStepper from "@mui/material/MobileStepper";

// Components
import Review from "../components/Review";

// Data
import { clientReviews } from "../DummyData";

// Style
import styles from "./SuccessStoriesScreen.module.css";

interface SuccessStoriesScreenProps {
  isDesktop: boolean;
}

const SuccessStoriesScreen: React.FC<SuccessStoriesScreenProps> = ({
  isDesktop,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  const style = {
    stepperStyle: {
      maxWidth: 400,
      flexGrow: 1,
      justifyContent: "center",
      marginTop: "16px",
      ".MuiMobileStepper-dot": {
        backgroundColor: "transparent",
        border: "1px solid #22222C",
        boxSizing: "border-box",
      },
      ".MuiMobileStepper-dotActive": {
        backgroundColor: "#22222C",
      },
    },
    noOverflow: {
      overflow: "visible",
    },
  };

  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <h3 className={isDesktop ? styles.h3Desktop : styles.h3Mobile}>
        Hear success stories from our clients
      </h3>
      {/* https://mui.com/material-ui/react-stepper/#text-with-carousel-effect */}
      {/* https://github.com/oliviertassinari/react-swipeable-views */}
      {isDesktop ? (
        <div className={styles.reviewContainer}>
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
        </div>
      ) : (
        <div className={styles.reviewContainerMobile}>
          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            slideStyle={style.noOverflow}
            style={style.noOverflow}
            containerStyle={style.noOverflow}
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
            steps={3}
            position="static"
            activeStep={activeStep}
            sx={style.stepperStyle}
            nextButton={null}
            backButton={null}
          />
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesScreen;
