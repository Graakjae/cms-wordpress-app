import { FlexibleSectionsFlexContentNotFoundPageLayout } from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
interface NotFoundSectionProps {
  section: FlexibleSectionsFlexContentNotFoundPageLayout;
}

const NotFoundSection: React.FC<NotFoundSectionProps> = ({ section }) => {
  return (
    <div className=" h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-[30px] md:text-[45px] text-center">
        {section?.title}
      </h1>
      <p className="text-[20px] text-center mb-[30px]">{section?.text}</p>
      <div className="text-PrimaryGreen">
        <LinkButton link={`${section?.link?.url}`}>
          {section.link?.title}
        </LinkButton>
      </div>
    </div>
  );
};

export default NotFoundSection;
