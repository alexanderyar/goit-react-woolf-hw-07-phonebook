import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { addingFilterValue } from 'redux/filterSlice/filterSlice';
import { FilterInput } from './FIlter.styled';
import { selectFilter } from 'redux/selectors/selectors';

export const Filter = () => {
  const filterValue = selectFilter();

  const dispatch = useDispatch();

  return (
    <FilterInput htmlFor="filter">
      Find your contact
      <input
        name="filter"
        type="text"
        value={filterValue}
        onChange={e => dispatch(addingFilterValue(e.currentTarget.value))}
      />
    </FilterInput>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string,
  filterFunc: PropTypes.func,
};
