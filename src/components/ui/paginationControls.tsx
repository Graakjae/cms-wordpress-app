import Image from "next/image";
import ArrowRight from "@/public/Icon-feather-arrow-up-right.svg";

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  goToPage,
  goToNextPage,
  goToPreviousPage,
}) => {
  return (
    <div className="absolute mx-auto right-0 left-0 bottom-[0px] flex items-center justify-center mt-6 space-x-4 pb-[150px]">
      <Image
        onClick={goToPreviousPage}
        src={ArrowRight}
        alt="Arrow Right"
        width={15}
        height={15}
        className={`transform rotate-180 ${
          currentPage === 1 ? "opacity-25" : "cursor-pointer"
        }`}
      />
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 ${
              currentPage === index + 1
                ? "bg-PrimaryGold text-white rounded-full w-[32px] h-[32px]"
                : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <Image
        onClick={goToNextPage}
        src={ArrowRight}
        alt="Arrow Right"
        width={15}
        height={15}
        className={`${
          currentPage === totalPages ? "opacity-25" : "cursor-pointer"
        }`}
      />
    </div>
  );
};

export default PaginationControls;
