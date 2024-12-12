import {
  BlogConnection,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import { renderSections } from "@/utils/renderSections";

interface AtMisteProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
}

const AtMistePage: React.FC<AtMisteProps> = ({ sections, blogs }) => {
  return (
    <div className="pt-[100px] lg:pt-[130px]">
      {renderSections(sections, { blogs })}
    </div>
  );
};

export default AtMistePage;
