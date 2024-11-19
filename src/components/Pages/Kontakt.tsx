import React from "react";
import {
  FlexibleSectionsFlexContentInformationSectionLayout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentContactTopSectionLayout,
} from "@/gql/graphql";
import InformationSection from "../Sections/InformationSection";
import ContactSection from "../Sections/ContactSection";

interface ContactPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const ContactPage: React.FC<ContactPageProps> = ({ sections }) => {
  const contactSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentContactTopSectionLayout"
  ) as FlexibleSectionsFlexContentContactTopSectionLayout;

  const informationSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentInformationSectionLayout"
  ) as FlexibleSectionsFlexContentInformationSectionLayout;

  return (
    <div className="">
      <ContactSection section={contactSection} />
      <InformationSection section={informationSection} />
    </div>
  );
};

export default ContactPage;
