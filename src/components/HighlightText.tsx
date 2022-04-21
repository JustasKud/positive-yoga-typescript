/* eslint react/no-array-index-key: 0 */
import React from "react";

interface HighlightTextProps {
  highlightText: string;
  text: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({
  highlightText,
  text,
}) => {
  const textArray = text.split(highlightText);

  return (
    <>
      {textArray.map((regularText, index) => (
        <React.Fragment key={index.toString()}>
          {regularText}
          {index !== textArray.length - 1 && <b>{highlightText}</b>}
        </React.Fragment>
      ))}
    </>
  );
};

export default HighlightText;
