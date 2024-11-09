import { useContext } from "react";
import fbIcon from "../../assets/icons/fb.png";
import googleIcon from "../../assets/icons/google.png";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { loginInWithGoogle, loginInWithFb } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginInWithGoogle()
      .then(() => {
        toast.success("Successfully Login");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleFbLogin = () => {
    loginInWithFb()
      .then(() => {
        toast.success("Successfully Login");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-[460px] mx-auto mt-6">
      <div className="divider mb-8 text-black">OR</div>
      <div className="space-y-2">
        <button
          type="button"
          className="p-2 w-full flex items-center border border-[#C7C7C7] rounded-full"
          onClick={handleFbLogin}
        >
          <img src={fbIcon} className="size-10" alt="" />
          <span className="grow inline-block text-center">
            Continue with Facebook
          </span>
        </button>
        <button
          type="button"
          className="p-2 w-full flex items-center border border-[#C7C7C7] rounded-full"
          onClick={handleGoogleLogin}
        >
          <img src={googleIcon} className="size-10" alt="" />
          <span className="grow inline-block text-center">
            Continue with Google
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
