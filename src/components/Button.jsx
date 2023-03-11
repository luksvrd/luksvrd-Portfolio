import PropTypes from "prop-types";

export default function Button({ text, colorClass }) {
  return (
    <button type="button" className={`h-8 w-12 rounded ${colorClass}`}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  // defaultProps are used when a prop is not passed to the component
  colorClass: "bg-orange-500",
};

Button.propTypes = {
  colorClass: PropTypes.string,
  text: PropTypes.string.isRequired,
};
