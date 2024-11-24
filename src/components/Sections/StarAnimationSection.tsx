import { FlexibleSectionsFlexContentStarAnimationLayout } from "@/gql/graphql";
interface StarAnimationSectionProps {
  section: FlexibleSectionsFlexContentStarAnimationLayout;
}

const StarAnimationSection: React.FC<StarAnimationSectionProps> = ({
  section,
}) => {
  return (
    <div className="flex flex-col items-center relative pb-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <p className="text-[25px] md:text-[35px] mt-[15px] mb-[30px] text-center max-w-[900px]">
        {section?.text}
      </p>
      <p className="text-[16px] font-light text-center">{section?.text2}</p>
    </div>
  );
};

export default StarAnimationSection;
