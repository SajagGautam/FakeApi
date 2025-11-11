import React, { useState } from "react";
import { useLoginUserMutation } from "../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlices";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("john@mail.com");
  const [password, setPassword] = useState("changeme");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Step 1: Login API call
      const res = await loginUser({ email, password }).unwrap();

      // Step 2: Fetch user profile
      const profileRes = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${res.access_token}` },
      });
      const userData = await profileRes.json();

      // Step 3: Save credentials
      dispatch(setCredentials({ token: res.access_token, user: userData }));

      // Step 4: Redirect
      navigate("/");
    } catch (err: any) {
      setError(err.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-xl rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Login
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full p-2 mb-4 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border w-full p-2 mb-6 rounded focus:ring-2 focus:ring-indigo-500 outline-none"
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-indigo-600 w-full text-white p-2 rounded hover:bg-indigo-700 transition"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
