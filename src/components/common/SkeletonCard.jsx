import React from 'react'

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden bg-white shadow-md animate-pulse">
    <div className="w-full h-48 bg-gray-200"></div>
    <div className="p-4">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
);

export default SkeletonCard