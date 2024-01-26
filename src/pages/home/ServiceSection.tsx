import Container from "@/components/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
import SameDayRecovery from "@/components/serviceTiles/SameDayRecovery";
import StorageReplacement from "@/components/serviceTiles/StorageReplacement";

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
        <ChipReplacement />
        <DataRecovery />
        <StorageReplacement />
        <SameDayRecovery />
        <SameDayRecovery />
        <SameDayRecovery />
      </div>
    </Container>
  );
};

export default ServiceSection;
