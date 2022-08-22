import {
    CLEAR_SEARCH_PARAMS,
} from './actionTypes';
import {InferActionsTypes } from '../store';

export const actions = {
    clearSearchParams: () => ({ type: CLEAR_SEARCH_PARAMS } as const),
};

export type RecruitActionsType = InferActionsTypes<typeof actions>;
