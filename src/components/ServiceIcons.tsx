import React from "react";
import ServiceIcon from "./ServiceIcon";

const services = [
  {
    title: "Kotisiivous",
    imgName: "house_clean.png",
  },
  {
    title: "Remonttisiivous",
    imgName: "vacuum_clean_2.png",
  },
  {
    title: "Yrityssiivous",
    imgName: "broom_clean.png",
  },
  {
    title: "Suursiivous",
    imgName: "cleaning_supplies_clean.png",
  },
  {
    title: "Muuttosiivous",
    imgName: "spray_bottle_clean.png",
  },
  {
    title: "Tekstiilipesu",
    imgName: "washing_machine_clean_2.png",
  },
  {
    title: "Ylläpitosiivous",
    imgName: "broom_clean_2.png",
  },
  {
    title: "Ikkunanpesu",
    imgName: "bubbles_clean.png",
  },
];

const ServiceIcons = () => {
  return (
    <div>
      <div className="service-icons-wrapper">
        {services.map((service, i) => (
          <ServiceIcon
            title={service.title}
            imgName={service.imgName}
            key={`service_${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceIcons;
