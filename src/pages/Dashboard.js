
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setToken, isAuthenticated } from "../utils/auth";
import { toast } from "react-toastify";
import RequestForm from "../components/RequestForm";
import RequestList from "../components/RequestList";

function Dashboard() {
  const location = useLocation();

  
  const [refreshTrigger, setRefreshTrigger] = useState(0);


  const handleRequestCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token && !isAuthenticated()) {
      setToken(token);
      toast.success("Logged in successfully!");
    }
  }, [location]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Customer Service Dashboard</h1>
      
      <RequestForm onRequestCreated={handleRequestCreated} />

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
       
        <RequestList
          category="General Queries"
          refreshTrigger={refreshTrigger}
        />
        <RequestList
          category="Product Features Queries"
          refreshTrigger={refreshTrigger}
        />
        <RequestList
          category="Product Pricing Queries"
          refreshTrigger={refreshTrigger}
        />
        <RequestList
          category="Product Feature Implementation Requests"
          refreshTrigger={refreshTrigger}
        />
      </div>
    </div>
  );
}

export default Dashboard;
