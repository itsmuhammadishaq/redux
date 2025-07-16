import { Add_t0_Card, Remove_to_Card } from "../constant/constant";
export const AddtoCard = (data) => {
  return {
    type: Add_t0_Card,
    data: data,
  };
};
export const RemovetoCard = () => {
  return {
    type: Remove_to_Card,
  };
};
