declare module 'react-pagimagic' {
  import * as React from 'react';

  interface PaginatorProps {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
  }

  const Paginator: React.FC<PaginatorProps>;

  export default Paginator;
}