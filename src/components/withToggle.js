import {withStateHandlers} from 'recompose';

const withToggle = withStateHandlers(
  ({active}) => ({active}),
  {
    toggle: ({active}) => () => ({active: !active}),
    toggleOn: () => () => ({active: true}),
    toggleOff: () => () => ({active: false}),
  },
)

export default withToggle;
