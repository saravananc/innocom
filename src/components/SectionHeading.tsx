
import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-12 ${
        centered ? "text-center" : ""
      } ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 heading-underline inline-block">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
