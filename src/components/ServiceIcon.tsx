import React from "react";

interface Props {
  imgName: string;
  title: string;
}

const ServiceIcon = (props: Props) => {
  const { imgName, title } = props;
  return (
    <div className="service-icon">
      <div className="service-image-wrapper">
        <img
          src={require(`../assets/${imgName}`)}
          alt={title}
          className="service-image"
        />
      </div>

      <h3 className="service-icon-title">{title}</h3>
    </div>
  );
};

export default ServiceIcon;
