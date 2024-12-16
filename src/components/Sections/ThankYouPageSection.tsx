"use client";
import { FlexibleSectionsFlexContentThankYouPageSectionLayout } from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import { useEffect } from "react";
interface ThankYouPageSectionProps {
  section: FlexibleSectionsFlexContentThankYouPageSectionLayout;
}

const ThankYouPageSection: React.FC<ThankYouPageSectionProps> = ({
  section,
}) => {
  useEffect(() => {
    const orderCompleted = sessionStorage.getItem("orderCompleted");

    if (!orderCompleted) {
      // Redirect to the homepage if the session flag is missing
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[90vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-[32px] font-semibold">{section?.title}</h1>
        <p className="text-[18px] mt-4">{section?.text}</p>
        <div className="text-[16px] font-semibold text-PrimaryGreen mt-6">
          <LinkButton link={`${section?.link?.url}`}>
            {section.link?.title}
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPageSection;
