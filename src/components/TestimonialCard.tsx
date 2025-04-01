
import React from "react";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  companyName: string;
  imageUrl?: string;
}

const TestimonialCard = ({
  text,
  name,
  role,
  companyName,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md card-hover">
      <div className="mb-4">
        <svg
          width="45"
          height="36"
          className="text-innocom-300 mb-4"
          viewBox="0 0 45 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4 36C8.86667 36 5.2 34.4 2.4 31.2C0.8 28.8 0 26 0 22.8C0 16.4 2.8 10.7333 8.4 5.8C14 0.866667 20 0 26.4 0L28 6.4C22.4 6.8 17.8667 8.66667 14.4 12C13.4667 12.8 12.4 13.3333 11.2 13.6C10 13.8667 9.2 14 8.8 14C8.4 14 9.2 14 11.2 14C12.8 14 14.4 14.5333 16 15.6C17.6 16.6667 18.4 18.5333 18.4 21.2C18.4 24.4 17.3333 27.4667 15.2 30.4C16.2667 32.1333 17.7333 33 19.6 33C21.4667 33 23.0667 32.0667 24.4 30.2C25.7333 28.3333 26.4 25.8667 26.4 22.8C26.4 17.2 23.6 13.4 18 11.4L20.4 5.4C25.4667 6.73333 29.4 9.4 32.2 13.4C35 17.4 36.4 22.6667 36.4 29.2C36.4 32.4 34.8 34.6 31.6 35.8C30.8 35.9333 30 36 29.2 36C26.1333 36 23.5333 34.4 21.4 31.2C21 31.3333 20.2 31.4 19 31.4C18.0667 31.4 17.3333 31.3333 16.8 31.2C16.2667 31.0667 15.7333 31 15.2 31C14.2667 31 13.6667 32.6667 13.4 36ZM37.6 36C33.0667 36 29.4 34.4 26.6 31.2C25 28.8 24.2 26 24.2 22.8C24.2 16.4 27 10.7333 32.6 5.8C38.2 0.866667 44.2 0 50.6 0L52.2 6.4C46.6 6.8 42.0667 8.66667 38.6 12C37.6667 12.8 36.6 13.3333 35.4 13.6C34.2 13.8667 33.4 14 33 14C32.6 14 33.4 14 35.4 14C37 14 38.6 14.5333 40.2 15.6C41.8 16.6667 42.6 18.5333 42.6 21.2C42.6 24.4 41.5333 27.4667 39.4 30.4C40.4667 32.1333 41.9333 33 43.8 33C45.6667 33 47.2667 32.0667 48.6 30.2C49.9333 28.3333 50.6 25.8667 50.6 22.8C50.6 17.2 47.8 13.4 42.2 11.4L44.6 5.4C49.6667 6.73333 53.6 9.4 56.4 13.4C59.2 17.4 60.6 22.6667 60.6 29.2C60.6 32.4 59 34.6 55.8 35.8C55 35.9333 54.2 36 53.4 36C50.3333 36 47.7333 34.4 45.6 31.2C45.2 31.3333 44.4 31.4 43.2 31.4C42.2667 31.4 41.5333 31.3333 41 31.2C40.4667 31.0667 39.9333 31 39.4 31C38.4667 31 37.8667 32.6667 37.6 36Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-gray-700 mb-4">{text}</p>
      </div>
      <div className="flex items-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-innocom-100 text-innocom-700 flex items-center justify-center mr-4 font-bold text-lg">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">
            {role}, {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
