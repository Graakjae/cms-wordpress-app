import { FlexibleSectionsFlexContentTestSectionLayout } from "@/gql/graphql";

export default function ProductsSection({
  section,
}: {
  section: FlexibleSectionsFlexContentTestSectionLayout;
}) {
  return (
    <div>
      <h2>{section?.title}</h2>
      <p>{section?.testPageText}</p>
    </div>
  );
}
