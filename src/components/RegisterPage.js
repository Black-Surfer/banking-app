import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess, setError } from "../store/authSlice";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://third-tutorial.onrender.com/api/create-account",
        {
          firstName: "sessi",
          lastName: "dom",
          email: "dominic@sessi.com",
          gender: "male",
          password: "P@ssword1234$",
          phoneNumber: "+2347040102920",
          address: "John",
        },
        {
          headers: {
            "access-control-allow-origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      // const response = await fetch(
      //   "https://third-tutorial.onrender.com/api/create-account",
      //   {
      //     method: "POST",
      //     headers: {
      //       "access-control-allow-origin": "*",
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       firstName: "sessi",
      //       lastName: "dom",
      //       email: "dominic@sessi.com",
      //       gender: "male",
      //       password: "P@ssword1234$",
      //       phoneNumber: "+2347040102920",
      //       address: "John",
      //     }),
      //   }
      // );

      // if (response.ok) {
      //   const data = await response.json();
      //   dispatch(loginSuccess(data));
      // } else {
      //   throw new Error("Registration failed");
      // }
    } catch (error) {
      console.log(error);
      dispatch(setError(error.message));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          placeholder="Enter your first name"
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder="Enter your last name"
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter your email"
        />

        <select
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Gender
          </option>
          <option value="male"> Male </option>
          <option value="Female"> Female </option>
          <option value="N/A"> Prefer not to say</option>
        </select>

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter your password"
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          placeholder="Enter your phone number"
        />
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          maxLength="300"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          placeholder="Enter your address"
        />

        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
