import { FlexibleSectionsFlexContentBigPictureSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import VideoComponent from "../ui/videoComponent";
import { LinkButton } from "../ui/linkButton";
import { formatContent } from "@/utils/formatContent";
import BackgroundImageOrange from "@/public/orange-background-image.png";
import BackgroundImageGreen from "@/public/big-picture-green.jpg";

interface BigPictureSectionProps {
  section: FlexibleSectionsFlexContentBigPictureSectionLayout;
}

const BigPictureSection: React.FC<BigPictureSectionProps> = ({ section }) => {
  console.log("picturesection", section);
  return (
    <div className="relative">
      <Image
        src={
          section.background === "orange"
            ? BackgroundImageOrange
            : "/big-picture-green.jpg"
        }
        alt="big-picture"
        width={1400}
        height={470}
        className="w-full object-cover h-[470px] absolute"
      />
      <div className="flex justify-between relative pt-[50px] pb-[90px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <Image
          src={section.image?.node?.sourceUrl || ""}
          alt={section.image?.node?.altText || ""}
          width={1400}
          height={700}
          className="max-w-[1400px] max-h-[700px] object-cover object-top"
        />
      </div>
    </div>
  );
};

export default BigPictureSection;
