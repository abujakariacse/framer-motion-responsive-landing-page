import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";
export const useGetService = () => {
  const services = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (datas) => {
      const services = datas?.data.data.map((item) => ({
        id: item?._id,
        name: item?.name,
        description: item?.description,
        price: item?.price,
      }));
      return services;
    },
  });
  return services;
};
