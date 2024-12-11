import React from "react";
import { FlexibleSectionsFlexContentLayout } from "@/gql/graphql";
import { renderSections } from "@/utils/renderSections";

interface FAQProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const FAQPage: React.FC<FAQProps> = ({ sections }) => {
  return (
    <div>
      <h1>FAQ</h1>
      {renderSections(sections)}
    </div>
  );
};

export default FAQPage;
