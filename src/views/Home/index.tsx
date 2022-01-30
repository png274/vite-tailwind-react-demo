import React from "react";
import styles from "./home.module.scss";

interface Props { }
const Home: React.FC<Props> = ({ }) => {
  return (
    <>
      <div className="min-h-screen max-w-full flex justify-center items-center flex-col ">
        <div className="px-5">
          <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account.</h1>
          <form className="mt-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`${styles['user-input']} rounded-t-md`}
                  placeholder="Email address"
                />
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  className={`${styles['user-input']} rounded-b-md`}
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="w-full py-3 flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox"
                  className="mr-1.5 rounded"
                  id="email-address"
                  name="remember-me"
                />
                <label>Remember me</label>
              </div>
              <div className="flex justify-center">
                <a href="#" className="text-blue-500 hover:text-blue-400">Forgot password?</a>
              </div>
            </div>
            <button type="button" className={`${styles['login-btn']}`}>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Home;
