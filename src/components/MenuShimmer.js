

const MenuShimmer = () => {
  return (
        <div className="space-y-6 p-4 animate-pulse">
            {/* Large banner shimmer */}
            <div className="bg-gray-200 rounded-lg h-36 w-full"></div>

            {/* Repeated card shimmer */}
            {[1, 2, 3].map((_, index) => (
                <div className="space-y-4" key={index}>
                    <div className="flex space-x-4">
                        {/* Avatar shimmer */}
                        <div className="bg-gray-200 rounded-full h-10 w-10"></div>
                        <div className="flex-1 space-y-2">
                            {/* Text shimmer */}
                            <div className="bg-gray-200 h-4 w-3/4 rounded"></div>
                            <div className="bg-gray-200 h-4 w-full rounded"></div>
                            <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
                        </div>
                        {/* Image shimmer */}
                        <div className="bg-gray-200 rounded-lg h-16 w-16"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

  
export default MenuShimmer;
  