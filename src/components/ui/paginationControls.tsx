import PaginationArrowIcon from "../icons/PaginationArrow";

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  className?: string;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
  goToPage,
  goToNextPage,
  goToPreviousPage,
  className,
}) => {
  return (
    <div
      className={`absolute mx-auto right-0 left-0 bottom-[0px] flex items-center justify-center mt-6 space-x-4 pb-[80px] md:pb-[150px]`}
    >
      <div
        onClick={goToPreviousPage}
        className={`transform rotate-180  ${
          currentPage === 1 ? "opacity-25" : "cursor-pointer"
        }`}
      >
        <PaginationArrowIcon />
      </div>

      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={`px-3 py-1 ${
              currentPage === index + 1
                ? `${className} rounded-full w-[32px] h-[32px]`
                : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div
        onClick={goToNextPage}
        className={` ${
          currentPage === totalPages ? "opacity-25" : "cursor-pointer"
        }`}
      >
        <PaginationArrowIcon />
      </div>
    </div>
  );
};

export default PaginationControls;
