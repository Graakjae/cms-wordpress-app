import { FlexibleSectionsFlexContentHeroPageSection2Layout } from "@/gql/graphql";
import Image from "next/image";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import VideoComponent from "../ui/videoComponent";
interface Section2Props {
  section: FlexibleSectionsFlexContentHeroPageSection2Layout;
}

const Section2: React.FC<Section2Props> = ({ section }) => {
  return (
    <div className="flex justify-between relative px-[5%] py-[150px]">
      <div className="w-[45%]">
        <h3 className="text-[35px] font-medium mb-[35px]">{section?.title}</h3>
        <p className="text-[18px] mt-[15px] mb-[30px]">{section.text}</p>
        <ButtonWithIcon>{section.buttonText}</ButtonWithIcon>
        <Image
          src={section?.leftImage?.node?.sourceUrl || ""}
          alt={section?.leftImage?.node?.altText || ""}
          className="object-cover mt-[65px]"
          width={720}
          height={767}
        />
      </div>

      <div className="w-[45%]">
        <div className="flex justify-end">
          <VideoComponent videoSrc={section?.video?.url || ""} />
        </div>
        <div className="flex justify-center mt-[60px] max-w-full">
          <p className="text-[28px] italic text-center max-w-[560px]">
            {section?.testimonialText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
