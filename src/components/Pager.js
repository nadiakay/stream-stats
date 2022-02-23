import { useContext } from "react";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { ArtistContext } from "../context/ArtistContext";

export const Pager = ({ range, page, handlePager }) => {
  const { totalPages } = useContext(ArtistContext);
  return (
    <div>
      <Pagination>
        {range.map((el, index) => (
          <PaginationItem key={index} active={el === page}>
            <PaginationLink onClick={() => handlePager(el)}>
              {el}
            </PaginationLink>
          </PaginationItem>
        ))}
      </Pagination>
      <p>Total Pages: {totalPages}</p>
    </div>
  );
};
