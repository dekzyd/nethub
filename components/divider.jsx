const Divider = ({ fill, flip }) => {
  return (
    // flip horizontally
    <div
      style={{
        transform: `rotateX(180deg) ${
          flip ? "rotateY(180deg)" : "rotateY(0deg)"
        }`,
      }}
    >
      <svg
        className="w-full h-2 xl:h-5"
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
