import { FlexibleSectionsFlexContentUnderProductSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import StarBeige from "../../public/star-beige2.svg";
import { formatContent } from "@/utils/formatContent";
interface UnderProductSectionProps {
  section: FlexibleSectionsFlexContentUnderProductSectionLayout;
}

const UnderProductSection: React.FC<UnderProductSectionProps> = ({
  section,
}) => {
  return (
    <div className="bg-PrimaryBeige relative">
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="lg:h-[80vh] w-full lg:w-1/2 flex items-center">
          <div className="w-full lg:w-[600px] lg:h-[60vh] flex flex-col  justify-between py-[40px] lg:py-0">
            <div>
              <h3 className="text-[35px] font-medium leading-tight max-w-[530px]">
                {section?.title}
              </h3>
              <p className="text-[18px] mt-[5px] mb-[35px] font-semibold">
                {section?.subtitle}
              </p>
            </div>
            <div className="w-full flex flex-col justify-between gap-[20px] lg:gap-0 md:flex-row lg:flex-col lg:pr-[30px]">
              <div className="flex flex-col lg:flex-row w-full md:w-1/2 lg:w-full lg:justify-between border-t border-[#707070] pt-4">
                <p className="font-semibold">{section.subsection1Title}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatContent(section?.subsection1Text) || "",
                  }}
                  className="w-full lg:w-[60%] text-[16px]"
                />
              </div>
              <div className="flex flex-col lg:flex-row w-full md:w-1/2 lg:w-full lg:justify-between border-t border-[#707070] pt-4 tablet:pt-0 lg:pt-4 lg:mt-[30px]">
                <p className="font-semibold">{section.subsection2Title}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: formatContent(section?.subsection2Text) || "",
                  }}
                  className="w-full lg:w-[60%] text-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[80vh] relative">
          <Image
            src={StarBeige}
            alt="Star beige"
            width={62}
            height={62}
            className="lg:hidden absolute top-0 left-0 right-0 m-auto z-10 mt-[-31px]"
          />
        </div>
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute bottom-0 right-0 w-full lg:w-1/2 h-[400px] lg:h-[80vh] object-cover object-top"
          width={960}
          height={913}
        />

        <Image
          src={StarBeige}
          alt="Star beige"
          width={75}
          height={75}
          className="hidden lg:block absolute bottom-0 top-0 left-0 right-0 m-auto"
        />
      </div>
    </div>
  );
};

export default UnderProductSection;
