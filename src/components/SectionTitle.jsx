import React from "react";

function SectionTitle({ bigTitle, subTitle }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2">{bigTitle}</h2>
      <p className="text-gray-600">{subTitle}</p>
    </div>
  );
}

export default SectionTitle;
