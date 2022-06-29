import { filterProblemsType } from '../constants';

const updateFilter = (payload) => ({
    type: filterProblemsType.UPDATE_FILTER,
    payload
})

export { updateFilter }