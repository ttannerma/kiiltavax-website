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

      <p className="service-icon-title">{title}</p>
    </div>
  );
};

export default ServiceIcon;
