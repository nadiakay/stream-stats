import React from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export const Pager = ({ range, page, handlePager }) => {
  return (
    <Pagination>
      {range.map((el, index) => (
        <PaginationItem key={index} active={el === [page]}>
          <PaginationLink onClick={() => handlePager(el)}>{el}</PaginationLink>
        </PaginationItem>
      ))}
    </Pagination>
  );
};
