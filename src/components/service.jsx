import {
  CurrencyDollarIcon,
  LockClosedIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/solid";
import React from "react";
const ServiceCard = ({ title, subtitle, icons, color }) => (
  <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div
      className={` w-10 h-10 rounded flex justify-center items-center ${color} `}
    >
      {icons}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className=" mt2 text-white text-lg ">{title}</h3>
      <p className=" mt2 text-white text-sm md:w-9/12">{subtitle}</p>
    </div>
  </div>
);
const Service = () => {
  return (
    <div className="flex md:flex-row w-full flex-col justify-center items-center gradient-bg-services">
      <div className="flex md:flex-row justify-between items-center md:p-20 py-12 px-4 ">
        <div className="flex-1 flex-col justify-start items-start ">
          <h1 className=" text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center">
        <ServiceCard
          color="bg-[#2952e3]"
          title="Security Guaranteed"
          icons={<LockClosedIcon className=" text-white" />}
          subtitle="Security is Guaranteed. we always maintain privacy and quality of products."
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Best exchange rates"
          icons={<ShieldExclamationIcon className=" text-white" />}
          subtitle="Security is Guaranteed. we always maintain privacy and quality of products."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest Transactions"
          icons={<CurrencyDollarIcon className=" text-white" />}
          subtitle="Security is Guaranteed. we always maintain privacy and quality of products."
        />
      </div>
    </div>
  );
};

export default Service;
