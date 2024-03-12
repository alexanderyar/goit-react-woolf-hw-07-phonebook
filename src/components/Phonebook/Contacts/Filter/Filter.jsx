import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { addingFilterValue } from 'redux/filterSlice/filterSlice'
import { FilterInput } from './FIlter.styled'
    
export const  Filter = () => {

    //reading filterValue from redux store state "filter"
    const filterValue = useSelector(state => state.filter)
    
    // assigning dispatch func
    const dispatch = useDispatch()



        return (
        <FilterInput htmlFor="filter">Find your contact  
                <input name="filter" type="text" value={filterValue} onChange={(e) =>
                    dispatch(addingFilterValue(e.currentTarget.value))} />
        </FilterInput>
       
    )
    }
    


Filter.propTypes = {
    inputValue: PropTypes.string,
    filterFunc: PropTypes.func
}