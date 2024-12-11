import { FlexibleSectionsFlexContentContactTopSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import { formatContent } from "@/utils/formatContent";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
interface ContactSectionProps {
  section: FlexibleSectionsFlexContentContactTopSectionLayout;
}

const ContactSection: React.FC<ContactSectionProps> = ({ section }) => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row relative mt-[100px] tablet:mt-[130px] w-full bg-PrimaryBeige/60">
      <div className="py-[30px] lg:py-0 tablet:h-[80vh] w-full flex flex-col-reverse tablet:flex-row items-center justify-start  max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="w-full tablet:w-[400px] lg:w-[600px]">
          <h1 className="text-[30px] md:text-[45px] font-medium mb-[15px]">
            {section?.title}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: formatContent(section?.text) || "",
            }}
            className="text-[16px]"
          />
          <p className="font-greatVibes text-[28px] mt-[45px]">Stine Rathcke</p>
          <p className="mt-[20px]">Stine Rathcke Vestergård / Forfatter</p>
          <p className="mt-[50px]">E-mail: {section?.mail}</p>
          <div className="mt-[20px] md:mt-[115px]">
            <p className="font-light text-[16px] mb-4">Find os på:</p>
            <div className="flex gap-[15px]">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="w-full tablet:w-[40%] h-[400px] xsm:h-[55vh] md:h-[70vh] tablet:h-[80vh]"></div>
      </div>
      <Image
        src={section?.image?.node?.sourceUrl || ""}
        alt={section?.image?.node?.altText || ""}
        className="absolute top-0 tablet:right-0 w-full tablet:w-[40%] h-[400px] xsm:h-[55vh] md:h-[70vh] tablet:h-[80vh] object-cover object-top"
        width={960}
        height={790}
      />
    </div>
  );
};

export default ContactSection;
