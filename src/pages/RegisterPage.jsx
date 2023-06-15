import useRegister from "../hooks/useRegister";
import Buttons from "../components/Buttons";
import RegisterForm from "../components/RegisterForm";
import RegisterIcon from "../assets/RegisterIcon.svg";
import Trademark from "../components/Trademark";

export default function RegisterPage() {
  const [
    fullname,
    onChangeName,
    username,
    onChangeUsername,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmitHandler,
  ] = useRegister();

  return (
    <div className="register-page flex">
      <div className="container flex w-screen h-screen self-center">
        <div className="container-register px-20 h-min">
          <div className="register-form p-6">
            <div className="register-form__header">
              <h1 className="register-form__header--title">Daftar</h1>
              <p className="register-form__header--subtitle">
                Silakan daftar untuk melanjutkan
              </p>
            </div>
            <RegisterForm
              registerFormClass="register-form"
              fullname={fullname}
              onChangeFullname={onChangeName}
              username={username}
              onChangeUsername={onChangeUsername}
              email={email}
              onChangeEmail={onChangeEmail}
              password={password}
              onChangePassword={onChangePassword}
            />
            <div className="register-form__btn">
              <Buttons
                title="Daftar"
                btnClass="btn-register w-full"
                name="Daftar"
                onClickAction={onSubmitHandler}
              />
              <div className="register-form__have-a-account">
                <p className="register-form__have-a-account--text">
                  Sudah punya akun?
                </p>
                <a
                  href="/login"
                  className="register-form__have-a-account--link"
                >
                  Login Sekarang
                </a>
              </div>
            </div>
          </div>
          <div className="register-image">
            <img
              src={RegisterIcon}
              alt="Register Icon"
              className="register-icon"
            />
          </div>
        </div>
      </div>
      <Trademark />
    </div>
  );
}
