import React from "react";

// Material UI
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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

// https://mui.com/material-ui/customization/how-to-customize/
const accordionStyle = {
  border: "1px solid rgba(0, 0, 0, 0.08)",
  boxSizing: "border-box",
  borderRadius: "16px",
  marginBottom: "8px",
  "&.Mui-expanded": {
    margin: "0px",
    marginBottom: "8px",
  },
  "&:first-of-type": {
    borderTopLeftRadius: "16px",
    borderTopRightRadius: "16px",
  },
  "&:last-of-type": {
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  },
  "&::before": {
    position: "unset",
  },
};

const summaryStyle = {
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: "16px 0px",
  },
};

const detailsStyle = {
  paddingTop: "0px",
};

const typographyStyle = {
  fontSize: "14px",
  lineHeight: "20px",
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title,
  content,
  id,
  isExpanded,
  handleChange,
}) => {
  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange(id)}
      sx={accordionStyle}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={summaryStyle}>
        <Typography>
          <strong>{title}</strong>
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={detailsStyle}>
        <Typography sx={typographyStyle}>
          <HighlightText highlightText="Positive Yoga's" text={content} />
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQAccordion;
