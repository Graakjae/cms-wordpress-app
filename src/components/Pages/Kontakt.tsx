import React from "react";
import { FlexibleSectionsFlexContentLayout } from "@/gql/graphql";
import { renderSections } from "@/utils/renderSections";

interface ContactPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const ContactPage: React.FC<ContactPageProps> = ({ sections }) => {
  return <div>{renderSections(sections)}</div>;
};

export default ContactPage;
