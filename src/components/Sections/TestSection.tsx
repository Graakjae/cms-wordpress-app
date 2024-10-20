import { FlexibleSectionsFlexContentTestSectionLayout } from "@/gql/graphql";

interface TestSectionProps {
  test: FlexibleSectionsFlexContentTestSectionLayout;
}

const TestSection: React.FC<TestSectionProps> = ({ test }) => {
  return (
    <div>
      <h2>{test.title}</h2>
      <p>{test.testPageText}c</p>
    </div>
  );
};
export default TestSection;
