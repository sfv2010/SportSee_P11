import "./Card.css";
import PropTypes from "prop-types";

/**
 * Returns a React component that displays a card with data.
 *
 * @param { String } value Value of the card
 * @param { Number } numericalValue Numeriale value of the card
 * @param { String } icon The file name of the svg icon located in /public
 */

function Card({ iconName, numericalValue, value }) {
    return (
        <div className="profileCardContainer">
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
    numericalValue: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};

export default Card;
