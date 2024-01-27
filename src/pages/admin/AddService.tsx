import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddService = () => {
  const [serviceName, setServiceName] = useState("");

  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
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
  return (
    <div>
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
    </div>
  );
};

export default AddService;
