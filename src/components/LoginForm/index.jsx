import PropTypes from "prop-types";
import "./styles/styles.css";

function LoginForm({
  loginFormClass,
  email,
  onChangeEmail,
  password,
  onChangePassword,
}) {
  return (
    <div className={`${loginFormClass} default-class flex flex-col`}>
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

LoginForm.propTypes = {
  loginFormClass: PropTypes.string.isRequired,
  email: PropTypes.string,
  onChangeEmail: PropTypes.func,
  password: PropTypes.string,
  onChangePassword: PropTypes.func,
};
export default LoginForm;
