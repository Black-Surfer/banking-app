const TransferPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Transfer
        </h2>

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="number"
          required
          placeholder="Enter amount"
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="number"
          minLength="2"
          maxLength="3"
          required
          placeholder="Enter Sort Code"
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="number"
          minLength="9"
          maxLength="10"
          required
          placeholder="Enter account number"
        />

        <input
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          type="text"
          required
          placeholder="Enter account holder name"
        />

        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          type="submit"
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default TransferPage;
