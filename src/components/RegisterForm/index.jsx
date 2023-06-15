import PropTypes from "prop-types";
import "./styles/styles.css";

function RegisterForm({
  registerFormClass,
  fullname,
  onChangeFullname,
  username,
  onChangeUsername,
  email,
  onChangeEmail,
  password,
  onChangePassword,
}) {
  return (
    <div className={`${registerFormClass} default-class flex flex-col`}>
      <div className="fullname-form">
        <label className="fullname-form__label" htmlFor="fullname">
          Full Name
        </label>
        <input
          className="fullname-form__input"
          type="text"
          value={fullname}
          onChange={onChangeFullname}
        />
      </div>
      <div className="username-form">
        <label className="username-form__label" htmlFor="username">
          Username
        </label>
        <input
          className="username-form__input"
          type="text"
          value={username}
          onChange={onChangeUsername}
        />
      </div>
      <div className="email-form">
        <label className="email-form__label" htmlFor="email">
          Email
        </label>
        <input
          className="email-form__input"
          type="text"
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className="password-form">
        <label className="password-form__label" htmlFor="password">
          Password
        </label>
        <input
          className="password-form__input"
          type="password"
          value={password}
          onChange={onChangePassword}
        />
      </div>
    </div>
  );
}

RegisterForm.propTypes = {
  registerFormClass: PropTypes.string.isRequired,
  fullname: PropTypes.string,
  onChangeFullname: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
  email: PropTypes.string,
  onChangeEmail: PropTypes.func,
  password: PropTypes.string,
  onChangePassword: PropTypes.func,
};

export default RegisterForm;
