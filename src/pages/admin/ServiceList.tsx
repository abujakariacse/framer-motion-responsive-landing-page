import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Container from "@/components/Container";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGetService } from "@/api/admin/service/service.hook";
import { FormEvent, useState } from "react";

const ServiceList = () => {
  const { data: services, isLoading, isError } = useGetService();

  //Start

  // InvalidateCache or Realtime data update

  const [serviceName, setServiceName] = useState("");

  const queryClient = useQueryClient();

  const { mutateAsync, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });
  console.log({ isError, isSuccess });

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const serviceData = {
      name: serviceName,
      description: "Replaced down Battery",
      devices: ["Smartphone", "Laptop", "Tablet"],
      price: 300.0,
    };
    await mutateAsync(serviceData);
    console.log("posted");
  };

  //End

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong..</p>;
  }

  return (
    <Container className="mt-10 border px-0 rounded-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell className="font-medium">{service.name}</TableCell>
              <TableCell>{service.description}</TableCell>
              <TableCell className="">{service.price}</TableCell>
              <TableCell className=" flex  justify-end ">
                <Button variant={"destructive"} className="p-2">
                  {" "}
                  <Trash2 />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total Services</TableCell>
            <TableCell className="text-right">{services?.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <form
        className="mt-10 flex justify-center items-center "
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col w-96 gap-5 ">
          {" "}
          <input
            type="text"
            name=""
            id=""
            className="border py-2 rounded-sm focus:outline-none px-3"
            onChange={(e) => setServiceName(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Container>
  );
};

export default ServiceList;
