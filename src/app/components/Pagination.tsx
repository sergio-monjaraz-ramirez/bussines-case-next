import { PaginationProps } from "@/types";
import React from "react";

const Pagination: React.FC<PaginationProps> = ({ page, total, onPrevious, onNext }) => {
  return (
    <div className="mt-6 flex justify-between items-center">
      <button
        aria-label="Página anterior"
        disabled={page <= 1}
        onClick={onPrevious}
        className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-inherit hover:bg-gray-200"
      >
        Anterior
      </button>
      <div aria-current="page">Página {page}</div>
      <button
        aria-label="Página siguiente"
        disabled={!!total && page * 10 >= total}
        onClick={onNext}
        className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-inherit hover:bg-gray-200"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;