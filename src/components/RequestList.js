
import React, { useEffect, useState } from "react";
import { getRequestsByCategory } from "../utils/api";

function RequestList({ category, refreshTrigger }) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRequestsByCategory(category);
      if (!data.error) {
        setRequests(data);
      }
    };
    fetchData();
  }, [category, refreshTrigger]);

  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="font-bold text-lg mb-2">{category}</h3>
      {requests.length === 0 && (
        <p className="text-gray-500 text-sm">
          No requests in this category yet.
        </p>
      )}
      {requests.map((req) => (
        <div key={req._id} className="border-b border-gray-300 mb-2 pb-2">
          <p>
            <strong>Comments:</strong> {req.comments}
          </p>
          <p className="text-sm text-gray-500">
            {new Date(req.createdAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RequestList;
