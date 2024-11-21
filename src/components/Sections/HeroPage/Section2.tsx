import { FlexibleSectionsFlexContentHeroPageSection2Layout } from "@/gql/graphql";
import Image from "next/image";
import { ButtonWithIcon } from "../../ui/buttonWithIcon";
import VideoComponent from "../../ui/videoComponent";
import Link from "next/link";
interface Section2Props {
  section: FlexibleSectionsFlexContentHeroPageSection2Layout;
}

const Section2: React.FC<Section2Props> = ({ section }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between relative py-[50px] md:py-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex md:hidden justify-center mt-[30px] w-full">
        <p className="text-[22px] italic text-center">
          {section?.testimonialText}
        </p>
      </div>
      <div className="w-full md:w-[45%] mt-[30px] md:pt-0">
        <h3 className="text-[24px] md:text-[35px] font-medium mb-[15px] md:mb-[35px] max-w-[530px]">
          {section?.title}
        </h3>
        <p className="text-[18px] mt-[15px] mb-[30px] max-w-[530px]">
          {section.text}
        </p>
        <Link href={`${section?.buttonText?.url}`}>
          <ButtonWithIcon>{section?.buttonText?.title}</ButtonWithIcon>
        </Link>
        <Image
          src={section?.leftImage?.node?.sourceUrl || ""}
          alt={section?.leftImage?.node?.altText || ""}
          className="object-cover mt-[50px] md:mt-[65px]"
          width={720}
          height={767}
        />
      </div>

      <div className="w-full md:w-[45%]">
        <div className="flex justify-end">
          <VideoComponent videoSrc={section?.video?.url || ""} />
        </div>
        <div className="hidden md:flex justify-center mt-[60px] max-w-full">
          <p className="text-[28px] italic text-center max-w-[560px]">
            {section?.testimonialText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
