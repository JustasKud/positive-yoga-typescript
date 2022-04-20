import React from "react";
import { styled } from "@mui/material/styles";

// Material UI
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Typography as MuiTypography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HighlightText from "./HighlightText";

interface FAQAccordionProps {
  title: string;
  content: string;
  id: number;
  isExpanded: boolean;
  handleChange: (
    id: number
  ) => (event: React.SyntheticEvent, expanded: boolean) => void;
}

const Accordion = styled(MuiAccordion)`
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  border-radius: 16px;
  margin-bottom: 8px;

  &.Mui-expanded {
    margin: 0px;
    margin-bottom: 8px;
  }

  &:first-of-type {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  &:last-of-type {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  &::before {
    position: unset;
  }
`;

const AccordionSummary = styled(MuiAccordionSummary)`
  & .MuiAccordionSummary-content.Mui-expanded {
    margin: 16px 0px;
  }
`;

const AccordionDetails = styled(MuiAccordionDetails)`
  padding-top: 0px;
`;

const Typography = styled(MuiTypography)`
  font-size: 14px;
  line-height: 20px;
`;

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title,
  content,
  id,
  isExpanded,
  handleChange,
}) => {
  return (
    <Accordion expanded={isExpanded} onChange={handleChange(id)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <MuiTypography>
          <strong>{title}</strong>
        </MuiTypography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <HighlightText highlightText="Positive Yoga's" text={content} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQAccordion;
