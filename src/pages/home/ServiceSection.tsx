import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";

const ServiceSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>Services that we provide.</h1>
        <p className="mt-6 mb-16 max-w-[80ch]">
          We provide various computer repair services and solutions for our new
          and regular customers. Feel free to find out more below.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-[19px]">
        <BatteryReplacement />
        <div className="bg-gray h-[415px] rounded-xl col-span-6 lg:col-span-5"></div>
        <div className="bg-gray h-[415px] rounded-xl col-span-6 lg:col-span-7"></div>
        <div className="bg-gray h-[415px] rounded-xl col-span-12"></div>
        <div className="bg-gray h-[415px] rounded-xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-gray h-[415px] rounded-xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-gray h-[415px] rounded-xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServiceSection;
