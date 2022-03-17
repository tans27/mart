import RegisterForm from "../auth/RegisterForm";

const Auth = ({ authRoute }) => {
  return <>Login{authRoute === "login" && <RegisterForm />}</>;
};

export default Auth;
