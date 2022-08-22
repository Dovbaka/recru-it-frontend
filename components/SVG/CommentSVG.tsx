const CommentSVG = ({ ...rest }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H9C8.56713 16.9992 8.14582 17.1396 7.8 17.4L3 21ZM5 5V17L7.134 15.4C7.47964 15.1393 7.90107 14.9988 8.334 15H19V5H5Z"
        fill="#CBCBCB"
      />
    </svg>
  );
};

export default CommentSVG;
