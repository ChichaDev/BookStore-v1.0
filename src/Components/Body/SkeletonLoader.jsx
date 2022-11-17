import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={800}
      height={2000}
      viewBox="0 0 800 2000"
      backgroundColor="#e7e4e4"
      foregroundColor="#ecebeb"
    >
      <rect x="75" y="29" rx="30" ry="30" width="400" height="200" />
      <rect x="75" y="244" rx="30" ry="30" width="400" height="200" />
      <rect x="75" y="455" rx="30" ry="30" width="400" height="200" />
      <rect x="75" y="667" rx="30" ry="30" width="400" height="200" />
      <rect x="75" y="882" rx="30" ry="30" width="400" height="200" />
    </ContentLoader>
  );
};

export default SkeletonLoader;
