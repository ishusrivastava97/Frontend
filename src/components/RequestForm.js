
import React, { useState } from "react";
import { createRequest } from "../utils/api";
import { toast } from "react-toastify";

function RequestForm({ onRequestCreated }) {
  const [category, setCategory] = useState("General Queries");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await createRequest(category, comments);
    if (response.error) {
      toast.error(response.error);
    } else {
      toast.success("Request submitted successfully!");
      setComments("");
      // Call onRequestCreated to notify parent that a new request has been made
      if (onRequestCreated) onRequestCreated();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-4 rounded max-w-md"
    >
      <h2 className="font-bold text-xl mb-4">
        Submit a Customer Service Request
      </h2>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option>General Queries</option>
          <option>Product Features Queries</option>
          <option>Product Pricing Queries</option>
          <option>Product Feature Implementation Requests</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="border p-2 w-full rounded"
          rows="3"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-purple-700 text-white p-2 rounded w-full font-semibold hover:bg-purple-800"
      >
        Submit
      </button>
    </form>
  );
}

export default RequestForm;
