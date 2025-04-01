
import React from "react";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  linkTo?: string;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  linkTo,
}: ServiceCardProps) => {
  const CardContent = () => (
    <div className="p-6 bg-white rounded-lg shadow-md h-full card-hover">
      <div className="p-3 bg-innocom-50 inline-block rounded-lg mb-4">
        <Icon className="h-6 w-6 text-innocom-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {linkTo && (
        <div className="mt-4 group">
          <span className="text-innocom-600 font-medium group-hover:underline">
            Learn more
          </span>
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block h-full">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default ServiceCard;
