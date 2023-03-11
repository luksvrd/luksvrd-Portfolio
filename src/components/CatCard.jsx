import PropTypes from "prop-types";

const getRandomWidth = () => {
  const number = Math.random() * (300 - 200) + 200;
  return number.toString().split(".")[0];
};

export default function CatCard({ cat }) {
  return (
    <figure>
      {/* Using template literals in conjunction with jsx here  */}
      {/* using backticks when you have interpolation inside a string */}
      <img src={`https://placekitten.com/${getRandomWidth()}/300`} alt="" />
      <figcaption>
        {/* These curly breackets are for the basic js interpolation, not related to react */}
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </figcaption>
    </figure>
  );
}

CatCard.propTypes = {
  cat: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
