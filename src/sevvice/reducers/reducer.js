import { Add_t0_Card, Remove_to_Card } from "../constant/constant";
const intialstate = {
  cardData: [],
};

export default function cardItems(state = [], action) {
  switch (action.type) {
    case Add_t0_Card:
      return [...state, { cardData: action.data }];
    case Remove_to_Card:
      state.pop();
      return [...state];

    default:
      return state;
  }
}
