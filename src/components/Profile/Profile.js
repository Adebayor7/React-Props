import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  const { fullName, bio, profession } = props;
  const handleName = (e) => {
    e.preventDefault();
    alert(fullName);
  };
  return (
      
    <div>
      {props.children}
      <h2>Full Name: {fullName}</h2>
      <h2>Bio: {bio}</h2>
      <h2>Profession: {profession}</h2>
      <button onClick={handleName}>Click</button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Adebayo",
  bio: "I'm a boy",
  profession: "Software developer",
};

Profile.propTypes = {
  stringProp: PropTypes.string,
};

export default Profile;
