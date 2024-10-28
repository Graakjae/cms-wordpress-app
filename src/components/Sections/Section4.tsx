import { FlexibleSectionsFlexContentHeroPageSection4Layout } from "@/gql/graphql";
import Image from "next/image";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import VideoComponent from "../ui/videoComponent";
import { LinkButton } from "../ui/linkButton";
interface Section4Props {
  section: FlexibleSectionsFlexContentHeroPageSection4Layout;
}

const Section4: React.FC<Section4Props> = ({ section }) => {
  return (
    <div className="flex justify-between relative py-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-[30%]">
        <p className="text-[18px] font-medium mb-[30px]">{section?.title}</p>
        <p className="text-[18px] mt-[15px] mb-[20px]">{section.text}</p>
        <p className="text-[18px] mt-[15px] mb-[20px]">{section.text2}</p>
        <LinkButton link="/læs-mere">{section?.buttonText}</LinkButton>
      </div>

      <div className="w-[60%] flex items-center">
        <p className="text-[2rem] italic">{section?.rightBigText}</p>
      </div>
    </div>
  );
};

export default Section4;
