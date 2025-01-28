

const OnlineResShimmer = () => {
    return (
        <div className="shimmer-card p-4 m-4 bg-gray-200 rounded-lg shadow-md w-64 animate-pulse">
          <div className="bg-gray-300 h-40 rounded-lg"></div>
          <div className="mt-3">
            <div className="bg-gray-300 h-5 rounded w-3/4 mb-2"></div>
            <div className="bg-gray-300 h-4 rounded w-1/2 mb-2"></div>
            <div className="bg-gray-300 h-4 rounded w-full mb-2"></div>
            <div className="bg-gray-300 h-4 rounded w-2/3"></div>
          </div>
        </div>
    );
};

export default OnlineResShimmer;