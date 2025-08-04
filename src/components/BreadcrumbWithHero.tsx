import { ChevronRight } from "lucide-react";
import BgImage from "@/assets/breadcrum.png";

const BreadcrumbWithHero = ({ title, breadcrumbs }) => {
  return (
    <section className="relative h-64 md:h-80 lg:h-96 w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={BgImage} 
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full flex flex-col justify-end pb-8 md:pb-12 lg:pb-16 px-4">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-sm text-white/80 mb-4">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="mx-2 h-4 w-4" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium text-white">{crumb.label}</span>
              ) : (
                <a href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Page Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default BreadcrumbWithHero;