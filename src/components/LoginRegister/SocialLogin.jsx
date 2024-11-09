import fbIcon from "../../assets/icons/fb.png";
import googleIcon from "../../assets/icons/google.png";

const SocialLogin = () => {
  return (
    <div className="max-w-[460px] mx-auto mt-6">
      <div className="divider mb-8 text-black">OR</div>
      <div className="space-y-2">
        <button
          type="button"
          className="p-2 w-full flex items-center border border-[#C7C7C7] rounded-full"
        >
          <img src={fbIcon} className="size-10" alt="" />
          <span className="grow inline-block text-center">
            Continue with Facebook
          </span>
        </button>
        <button
          type="button"
          className="p-2 w-full flex items-center border border-[#C7C7C7] rounded-full"
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
