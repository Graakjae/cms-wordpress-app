import { FlexibleSectionsFlexContentUnderProductSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import StarBeige from "../../public/star-beige.svg";
import { formatContent } from "@/utils/formatContent";
interface UnderProductSectionProps {
  section: FlexibleSectionsFlexContentUnderProductSectionLayout;
}

const UnderProductSection: React.FC<UnderProductSectionProps> = ({
  section,
}) => {
  return (
    <div className="bg-Beige relative">
      <div className="flex max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="h-[80vh] w-1/2 flex items-center">
          <div className="w-[600px] h-[60vh] flex flex-col justify-between">
            <div>
              <h3 className="text-[35px] font-medium leading-tight max-w-[530px]">
                {section?.title}
              </h3>
              <p className="text-[18px] mt-[5px] mb-[35px] font-semibold">
                {section?.subtitle}
              </p>
            </div>
            <div>
              <div className="flex justify-between border-t border-[#707070] pt-4">
                <p className="font-semibold">{section.subsection1Title}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatContent(section?.subsection1Text) || "",
                  }}
                  className="w-[60%] text-[16px]"
                />
              </div>
              <div className="flex justify-between border-t border-[#707070] pt-4 mt-[30px]">
                <p className="font-semibold">{section.subsection2Title}</p>
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatContent(section?.subsection2Text) || "",
                  }}
                  className="w-[60%] text-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-[80vh]"></div>
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute right-0 w-1/2 h-[80vh] object-cover object-top"
          width={960}
          height={913}
        />

        <Image
          src={StarBeige}
          alt="Star beige"
          width={75}
          height={75}
          className="absolute bottom-0 top-0 left-0 right-0 m-auto"
        />
      </div>
    </div>
  );
};

export default UnderProductSection;
