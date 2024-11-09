import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import SocialLogin from "../../components/LoginRegister/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fName = form.get("fname");
    const lName = form.get("lname");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirm_password");
    const displayName = `${fName} ${lName}`;

    const passRegEx = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W)(?!.* ).{6,16}/;
    const validPass = passRegEx.test(password);

    if (!validPass) {
      toast.error(
        "Password must containt an uppcase, a lowarcase, a special charecter and must be 8 to 16 charecter logn"
      );
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Please confirm the password");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, { displayName })
          .then(() => {
            toast.success("User created successfully");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className="py-16">
      <div className="max-w-xl mx-auto border border-[#ababab] rounded-md py-9 px-14">
        <h1 className="text-2xl text-black font-bold">Create an account</h1>

        <form className="mt-14 space-y-10" onSubmit={handleRegister}>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="form__input"
            required
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="form__input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Username or Email"
            className="form__input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form__input"
            required
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="form__input"
            required
          />

          <input
            type="submit"
            value="Create an account"
            className="primary__btn w-full"
          />
        </form>
        <div className="mt-4">
          <p className="text-center font-medium text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-crayola underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      <SocialLogin />
    </section>
  );
};

export default Register;
