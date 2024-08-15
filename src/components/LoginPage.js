import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginSuccess, setError } from "../store/authSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://third-tutorial.onrender.com/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(loginSuccess(data));
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-300">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">LOGIN</h2>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          value={email}
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
