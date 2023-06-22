import React from "react";
import PropTypes from "prop-types";

function User({ id, name, username, email }) {
  return (
    <div className="users__user">
      <img className="userImg" alt="userImg" src="img/userimg.png" />
      <div className="user__data">
        <h3 className="user__id">{id}</h3>
        <h5 className="user__name">{name}</h5>
        <h5 className="user__username">{username}</h5>
        <h5 className="user__email">{email}</h5>
      </div>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default User;
