import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');

export const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const selectDomain = (state) => state.get('APP');

export const makeSelectSocket = () => createSelector(
  selectDomain,
  (subState) => subState.get('socket')
);
