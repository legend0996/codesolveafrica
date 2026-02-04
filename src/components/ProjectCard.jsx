import { ExternalLink, Star } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  link,
  category,
  rating,
  price,
  features,
  status,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden h-48 bg-gray-200 group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {category && (
          <div className="absolute top-0 right-0 m-3">
            <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        )}
        {price && (
          <div className="absolute top-0 left-0 m-3 bg-primary-600 text-white px-3 py-1 rounded-lg font-bold text-sm">
            {price}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-1 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 ml-2">({rating})</span>
          </div>
        )}

        {/* Features */}
        {features && features.length > 0 && (
          <ul className="space-y-1 mb-4 text-sm text-gray-700">
            {features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Status */}
        {status && (
          <div className="mb-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            {status}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 mt-auto"
        >
          View <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
