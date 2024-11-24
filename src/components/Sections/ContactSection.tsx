import { FlexibleSectionsFlexContentContactTopSectionLayout } from "@/gql/graphql";
import { Button } from "../ui/button";
import Image from "next/image";
import StarBeige from "../../../public/star-beige.svg";
import Link from "next/link";
import { formatContent } from "@/utils/formatContent";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
interface ContactSectionProps {
  section: FlexibleSectionsFlexContentContactTopSectionLayout;
}

const ContactSection: React.FC<ContactSectionProps> = ({ section }) => {
  return (
    <div className="flex relative pb-[37px] mt-[130px] w-full">
      <div className="h-[80vh] w-[60%] flex items-center justify-center bg-PrimaryBeige/60">
        <div className="w-[600px]">
          <h1 className="text-[45px] font-medium mb-[15px]">
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
          <div className="mt-[115px]">
            <p className="font-light text-[16px] mb-4">Find os på:</p>
            <div className="flex gap-[15px]">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={section?.image?.node?.sourceUrl || ""}
        alt={section?.image?.node?.altText || ""}
        className="w-[40%] h-[80vh] object-cover"
        width={960}
        height={790}
      />
    </div>
  );
};

export default ContactSection;
