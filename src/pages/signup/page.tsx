import React from "react";
import { useUserAuth } from "../../context/userAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { UserSignIn } from "../../types";

const initialValue: UserSignIn = {
  email: "",
  password: "",
  confirmPassword: "",
};

interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> = () => {
  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = React.useState<UserSignIn>(initialValue);
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSigningIn(true);
    setError(null);
    try {
      await googleSignIn();
      navigate("/");
    } catch (error: any) {
      console.error("Error: ", error);
      if (error.code === "auth/popup-closed-by-user") {
        setError(
          "The popup was closed before completing the sign-in. Please try again."
        );
      } else if (error.code === "auth/cancelled-popup-request") {
        setError("Multiple sign-in attempts detected. Please try again.");
      } else {
        setError(
          "An error occurred during the sign-in process. Please try again."
        );
      }
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      console.log("The user Info: ", userInfo);
      await signUp(userInfo.email, userInfo.password);
      navigate("/");
    } catch (error) {
      console.error("Error: ", error);
      setError(
        "An error occurred during the sign-up process. Please try again."
      );
    }
  };

  return (
    <div className="font-[sans-serif] bg-gray-50 flex items-center md:h-screen p-4">
      <div className="w-full max-w-4xl max-md:max-w-xl mx-auto">
        <div className="bg-white grid md:grid-cols-2 gap-16 w-full sm:p-8 p-6 shadow-md rounded-md overflow-hidden">
          <div className="justify-center items-center">
            <div className="mb-8">
              <h3 className="text-gray-800 text-2xl font-bold">Signup</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="bg-gray-100 px-3 py-2.5 w-full rounded-md text-sm tracking-wider placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-50 transition duration-100 border border-transparent focus:border-gray-400 shadow-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={userInfo.password}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    className="bg-gray-100 px-3 py-2.5 w-full rounded-md text-sm tracking-wider placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-50 transition duration-100 border border-transparent focus:border-gray-400 shadow-sm"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="confirm-password"
                    value={userInfo.confirmPassword}
                    onChange={(e) =>
                      setUserInfo((prev) => ({
                        ...prev,
                        confirmPassword: e.target.value,
                      }))
                    }
                    className="bg-gray-100 px-3 py-2.5 w-full rounded-md text-sm tracking-wider placeholder-gray-400 text-gray-800 outline-none focus:bg-gray-50 transition duration-100 border border-transparent focus:border-gray-400 shadow-sm"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-5 py-2.5 rounded-md text-white text-base tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700"
                >
                  Signup
                </button>
              </div>
              <p className="text-center mt-4 text-gray-500 text-sm tracking-wide">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 hover:text-blue-700 hover:underline transition duration-100"
                >
                  Login
                </Link>
              </p>{" "}
              <div className="max-md:order-1 space-y-2">
                <div className="my-2">
                  <h3 className="text-gray-800 text-xl text-center font-bold">
                    or{" "}
                  </h3>
                </div>

                <div className="space-y-6">
                  <button
                    type="button"
                    className="w-full px-5 py-2.5 flex items-center justify-center rounded-md text-gray-800 text-base tracking-wider font-semibold border-none outline-none bg-gray-100 hover:bg-gray-200"
                    onClick={handleGoogleSignIn}
                    disabled={isSigningIn}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22px"
                      fill="#fff"
                      className="inline shrink-0 mr-4"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#fbbd00"
                        d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                        data-original="#fbbd00"
                      />
                      <path
                        fill="#0f9d58"
                        d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                        data-original="#0f9d58"
                      />
                      <path
                        fill="#31aa52"
                        d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                        data-original="#31aa52"
                      />
                      <path
                        fill="#3c79e6"
                        d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                        data-original="#3c79e6"
                      />
                      <path
                        fill="#cf2d48"
                        d="m352.167 159.833 10.606 10.606 77.099-77.099-86.216-86.216-86.216-4.243C187.62 0 123.333 26.629 74.981 74.981L161.29 161.29C193.844 128.734 238.365 110.4 285.706 110.4c20.966 0 40.796 3.737 59.522 10.444l6.939 39.167z"
                        data-original="#cf2d48"
                      />
                      <path
                        fill="#eb4132"
                        d="M74.981 74.981c-8.167 8.167-15.891 16.859-22.158 25.235C26.629 123.333 0 187.62 0 256h120c0-48.574 19.03-92.643 50.131-125.477L74.981 74.981z"
                        data-original="#eb4132"
                      />
                      <path
                        fill="#fbbd00"
                        d="m256 0-60 60 60 60c24.024 0 46.672 6.3 66.261 17.396l86.216-86.216C367.297 18.568 313.078 0 256 0z"
                        data-original="#fbbd00"
                      />
                    </svg>
                    Sign up with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
