import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.filter);

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter} onChange={changeFilter} />
      </FilterLabel>
    </FilterWrapper>
  );
};

export default Filter;