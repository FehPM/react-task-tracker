import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className={"header"}>
      <h1>{title}</h1>
      <Button
        onClick={() => {
          console.log("ai");
        }}
        color={"forestgreen"}
        text={"Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;