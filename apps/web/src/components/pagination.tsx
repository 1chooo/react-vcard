import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  selectedTag: string;
  basePath: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  selectedTag,
  basePath,
}) => {
  return (
    <div className="flex justify-center mt-5">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
        <Link
        key={pageNum}
        href={{
          pathname: basePath,
          query: { tag: selectedTag, page: pageNum.toString() },
        }}
        className={`flex items-center justify-center border-none w-10 h-10 px-4 py-2 mx-1 cursor-pointer text-base bg-border-gradient-onyx hover:scale-105 active:scale-95 rounded-xl shadow-lg hover:bg-orange-yellow-crayola-dark ${
          pageNum === currentPage ? "text-orange-yellow-crayola" : "text-white-2"
        }`}
        style={{
          transition: "background-color 0.3s ease",
        }}
      >
          {pageNum}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
