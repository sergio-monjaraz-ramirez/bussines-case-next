const SkeletonCard = () => {
  return (
    <div className="border rounded-md p-3 animate-pulse flex flex-col">
      <div className="h-40 w-full bg-gray-300 rounded-md mb-2" />
      <div className="flex-1">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-3 bg-gray-300 rounded w-full mb-1" />
        <div className="h-3 bg-gray-300 rounded w-full mb-1" />
      </div>
      <div className="mt-2 h-5 bg-gray-300 rounded w-1/4" />
    </div>
  )
}

export default SkeletonCard