const BlobShape = ({ color = "#4F46E5", size = 400, className = "" }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={`absolute z-0 ${className}`}
    >
      <path
        fill={color}
        d="M45.9,-65.3C59.1,-58.5,69.8,-45.8,75.5,-31.3C81.2,-16.7,81.9,-0.3,77.4,13.5C72.9,27.3,63.2,38.5,51.1,49.2C39,59.9,24.5,70.1,8.4,74.9C-7.7,79.7,-25.4,79.1,-39.3,70.3C-53.2,61.5,-63.3,44.5,-69.9,26.6C-76.5,8.7,-79.6,-10.1,-73.4,-25.3C-67.2,-40.5,-51.7,-52.1,-36.8,-58.2C-21.9,-64.3,-7.6,-64.9,6.9,-71.8C21.4,-78.7,32.8,-92,45.9,-65.3Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export default BlobShape