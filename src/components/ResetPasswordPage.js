const ResetPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-300">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center">Reset Password</h2>
        <p className="text-1xl font-semibold text-center mb-6">
          Enter your new password
        </p>
        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="password"
          placeholder="Enter password"
        />
        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
