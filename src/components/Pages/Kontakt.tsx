import React from "react";
import {
  FlexibleSectionsFlexContentInformationSectionLayout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentContactTopSectionLayout,
} from "@/gql/graphql";
import InformationSection from "../Sections/InformationSection";
import ContactSection from "../Sections/ContactSection";
import { renderSections } from "@/utils/renderSections";

interface ContactPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const ContactPage: React.FC<ContactPageProps> = ({ sections }) => {
  return <div>{renderSections(sections)}</div>;
};

export default ContactPage;
