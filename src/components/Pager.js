import { useDispatch } from 'react-redux'

import { setPage } from '../slices/artists'

export const Pager = ({ page, totalPages }) => {
  const dispatch = useDispatch()
  var pages = []
  for (var i = 0; i < totalPages; i++) {
    pages.push(
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    )
  }

  return (
    <div>
      <p>
        Showing page{' '}
        <select
          name="pages"
          id="page-select"
          value={page}
          onChange={(e) => dispatch(setPage(e.target.value))}
        >
          {pages}
        </select>{' '}
        of {totalPages}
      </p>
    </div>
  )
}
