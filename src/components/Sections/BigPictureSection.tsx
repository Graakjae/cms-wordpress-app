import { FlexibleSectionsFlexContentBigPictureSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import BackgroundImageOrange from "/public/orange-background-image.png";
import BackgroundImageGreen from "/public/green-background.svg";

interface BigPictureSectionProps {
  section: FlexibleSectionsFlexContentBigPictureSectionLayout;
}

const BigPictureSection: React.FC<BigPictureSectionProps> = ({ section }) => {
  return (
    <div className="relative">
      <Image
        src={
          section.background === "orange"
            ? BackgroundImageOrange
            : BackgroundImageGreen
        }
        alt="big-picture"
        width={1400}
        height={470}
        className="w-full object-cover h-[270px] md:h-[470px] absolute"
      />
      <div className="flex justify-between relative pt-[50px] pb-[90px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <Image
          src={section.image?.node?.sourceUrl || ""}
          alt={section.image?.node?.altText || ""}
          width={1400}
          height={700}
          className="w-full max-w-[1400px] h-[300px] md:h-[400px] lg:h-[500px] object-cover object-top"
        />
      </div>
    </div>
  );
};

export default BigPictureSection;
