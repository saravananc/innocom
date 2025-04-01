
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-innocom-900 mb-4">404</h1>
        <div className="w-16 h-1 bg-innocom-600 mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the homepage.
        </p>
        <Button asChild className="bg-innocom-600 hover:bg-innocom-700">
          <Link to="/" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Homepage
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
