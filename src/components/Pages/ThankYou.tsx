"use client";
import { useEffect } from "react";
import { renderSections } from "@/utils/renderSections";
import { FlexibleSectionsFlexContentLayout } from "@/gql/graphql";

interface ThankYouProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}

const ThankYouPage: React.FC<ThankYouProps> = ({ sections }) => {
  useEffect(() => {
    const orderCompleted = sessionStorage.getItem("orderCompleted");

    if (!orderCompleted) {
      // Redirect to the homepage if the session flag is missing
      window.location.href = "/";
    } else {
      // Clear the session flag after validation
      sessionStorage.removeItem("orderCompleted");
    }
  }, []);

  return <>{renderSections(sections)}</>;
};

export default ThankYouPage;
