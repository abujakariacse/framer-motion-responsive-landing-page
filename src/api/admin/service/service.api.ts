/* export const getServices = async () => {
  const result = await fetch("http://localhost:5000/api/v1/services").then(
    (res) => res.json()
  );
  if (!result.success) {
    throw new Error("Something went wrong");
  }
  return result;
}; */

import axios from "axios";

// using axios
export const getServices = async () => {
  const result = await axios.get("http://localhost:5000/api/v1/servicess");
  return result;
};
