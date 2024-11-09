import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";
import SocialLogin from "../../components/LoginRegister/SocialLogin";

const Login = () => {
  const { loginInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    loginInUser(email, password)
      .then(() => {
        toast.success("User Logged in successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto border border-[#ababab] rounded-md py-9 px-14">
        <h1 className="text-2xl text-black font-bold">Login</h1>

        <form className="mt-14 space-y-10" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            className="form__input"
            required
          />
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form__input"
              required
            />
            <div className="mt-6 flex items-center justify-between">
              <label htmlFor="remember" className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  className="checkbox"
                  id="remember"
                />
                <span className="inline-block font-medium text-black">
                  Remember Me
                </span>
              </label>

              <button
                type="button"
                className="text-crayola underline font-medium"
              >
                Forgot Password
              </button>
            </div>
          </div>
          <input type="submit" value="Login" className="primary__btn w-full" />
        </form>
        <div className="mt-4">
          <p className="text-center font-medium text-black">
            Don{"'"}t have and account?{" "}
            <Link to="/register" className="text-crayola underline">
              Create and account
            </Link>
          </p>
        </div>
      </div>
      <SocialLogin />
    </section>
  );
};

export default Login;
