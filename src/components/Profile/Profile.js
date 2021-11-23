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
      <h3>Bio: {bio}</h3>
      <h2>Profession: {profession}</h2>
      <button onClick={handleName}>Click</button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Adebayo Idris",
  bio: "I am a young man trying to achieve my goals and desire as a Full-stack software developer. There is way lot to say about myself but if am to keep it short i can say i am pretty honest and a blunt person because i do not hide my feelings from anything or anyone. Life is simple when you live it simple, we live once so i try to get the best out of life before we go 6feet under..",
  profession: "Software developer",
};

Profile.propTypes = {
  stringProp: PropTypes.string,
};

export default Profile;
