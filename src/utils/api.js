import { getToken } from "./auth";

const API_URL = "http://localhost:3000";

// Create a new request
export async function createRequest(category, comments) {
  const res = await fetch(`${API_URL}/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`, 
    },
    body: JSON.stringify({ category, comments }),
  });
  return res.json();
}

export async function getRequestsByCategory(category) {
  const res = await fetch(
    `${API_URL}/requests/${encodeURIComponent(category)}`,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`, 
      },
    }
  );
  return res.json();
}
