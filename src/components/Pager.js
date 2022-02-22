import React from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const Pager = ({ range, page, setPage }) => {
  return (
    <Pagination>
      {range.map((el, index) => (
        <PaginationItem key={index} active={el === [page]}>
          <PaginationLink href="#" onClick={() => setPage(el)}>
            {el}
          </PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};
