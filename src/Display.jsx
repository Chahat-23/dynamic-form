import React, { useEffect, useState } from "react";

function Display() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions =
      JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(storedSubmissions);
  }, []);

  if (submissions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>No data available. Please fill out the form first.</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="w-full max-w-4xl bg-black p-8 rounded-2xl shadow-gray-800 shadow-lg border-2 border-blue-600 bg-opacity-50">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
          Submitted Forms
        </h2>

        <div className="overflow-x-auto rounded-xl">
          <table className="min-w-full bg-white rounded-xl">
            <thead className="text-blue-500">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email ID</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Contact Number</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {submissions.map((submission, index) => (
                <tr key={index} className="text-center">
                  <td className="px-4 py-2 border">{submission.name}</td>
                  <td className="px-4 py-2 border">{submission.email}</td>
                  <td className="px-4 py-2 border">{submission.address}</td>
                  <td className="px-4 py-2 border">{submission.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Display;
