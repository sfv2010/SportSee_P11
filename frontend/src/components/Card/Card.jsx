import "./Card.css";
import PropTypes from "prop-types";

/**
 * The Card component displays a data card containing an icon, numerical value, and label.
 *
 * @param {Object} props  The props object
 * @param {string} props.iconName  The file name of the svg icon located in /public
 * @param {string} props.numericalValue The numerical value to display
 * @param {string} props.value  The description of the value
 * @param {string} props.cardClass The className of the Card
 * @returns {JSX.Element} The rendered Card component
 */

function Card({ iconName, numericalValue, value }) {
    return (
        <div className="cardContainer">
            <img
                src={`../../public/${iconName}-icon.svg`}
                alt="flame icon"
                className="cardImg"
            />
            <div className="profileCardText">
                <h2 className="profileCardNumericalValue">{numericalValue}</h2>
                <h3 className="profileCardValue">{value}</h3>
            </div>
        </div>
    );
}
Card.propTypes = {
    iconName: PropTypes.string.isRequired,
    numericalValue: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

export default Card;
