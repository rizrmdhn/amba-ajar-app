import useLogin from "../hooks/useLogin";
import LoginForm from "../components/LoginForm";
import Buttons from "../components/Buttons";
import LoginIcon from "../assets/LoginIcon.svg";
import Trademark from "../components/Trademark";

export default function LoginPage() {
  const [email, onChangeEmail, password, onChangePassword, onSubmitHandler] =
    useLogin();

  return (
    <div className="Login-page flex">
      <div className="container flex w-screen h-screen self-center">
        <div className="container-login p-10">
          <div className="login-form m-12">
            <div className="login-form__header">
              <h1 className="login-form__header--title">Selamat Datang</h1>
              <p className="login-form__header--subtitle">
                Silakan login untuk melanjutkan
              </p>
            </div>
            <LoginForm
              loginFormClass="login-form"
              email={email}
              onChangeEmail={onChangeEmail}
              password={password}
              onChangePassword={onChangePassword}
            />
            <div className="login-form__btn">
              <Buttons
                title="Login"
                btnClass="btn-login w-full"
                name="Login"
                onClickAction={onSubmitHandler}
              />
              <div className="login-form__need-account">
                <p className="login-form__need-account--text">
                  Tidak punya akun?
                </p>
                <a href="/register" className="login-form__need-account--link">
                  Daftar Sekarang
                </a>
              </div>
            </div>
          </div>
          <div className="login-image">
            <img src={LoginIcon} alt="Login Icon" />
          </div>
        </div>
      </div>
      <Trademark />
    </div>
  );
}
