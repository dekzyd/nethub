const Divider = ({ fill }) => {
  return (
    <div className="rotate-180">
      <svg
        className="w-full h-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path fill={fill} d="M0,6V0h1000v100L0,6z"></path>
      </svg>
    </div>
  );
};

export default Divider;
