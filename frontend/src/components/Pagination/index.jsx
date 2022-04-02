import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import getBackendUrl from '../../utilities/getBackendUrl';
import axios from 'axios';
import './index.css';

function Pagination({ sectionPerPage }) {
  const [urlParams, setUrlParams] = useSearchParams();
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    axios
      .get(`${getBackendUrl()}/sections/page-count`, {
        params: {
          countPerPage: sectionPerPage,
          searchInput: urlParams.get('section'),
        },
      })
      .then((res) => setPageCount(res.data.data.pageCount))
      .catch((err) => err);
  }, [sectionPerPage, urlParams]);

  const handlePageClick = (event) => {
    const newUrlParams = urlParams;
    newUrlParams.set('page', event.selected + 1);
    setUrlParams(newUrlParams);
  };

  return (
    <ReactPaginate
      nextLabel={<FaChevronRight />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<FaChevronLeft />}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}

Pagination.propTypes = {
  sectionPerPage: PropTypes.number.isRequired,
};

export default Pagination;
