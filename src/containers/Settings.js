import { API } from "aws-amplify";
import React, { useState } from "react";

export default function Settings(props) {
  const [isLoading, setIsLoading] = useState(false);

  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details
    });
  }

  return <div className="Settings"></div>;
}
