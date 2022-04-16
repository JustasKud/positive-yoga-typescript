import React, { useState, useEffect } from "react";

// Components
import FAQAccordion from "../components/FAQAccordion";

// Style
import styles from "./FAQScreen.module.css";

// Data
import { faqQuestions } from "../DummyData";

interface FAQScreenProps {
  isDesktop: boolean;
}

const FAQScreen: React.FC<FAQScreenProps> = ({ isDesktop }) => {
  const [expanded, setExpanded] = useState<Array<boolean>>([
    true,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (isDesktop) {
      setExpanded([true, false, false, false]);
    } else {
      setExpanded([true, true, true, true]);
    }
  }, [isDesktop]);

  const handleChange = (id: number) => () => {
    setExpanded((oldArray) => {
      const arrayCopy = JSON.parse(JSON.stringify(oldArray));
      arrayCopy[id] = !oldArray[id];
      return arrayCopy;
    });
  };
  return (
    <div
      className={isDesktop ? styles.containerDesktop : styles.containerMobile}
    >
      <h3 className={isDesktop ? styles.titleDesktop : styles.titleMobile}>
        Frequently Asked Questions
      </h3>
      {faqQuestions.map((question) => (
        <FAQAccordion
          title={question.title}
          content={question.content}
          id={question.id}
          key={question.id.toString()}
          isExpanded={expanded[question.id]}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default FAQScreen;
