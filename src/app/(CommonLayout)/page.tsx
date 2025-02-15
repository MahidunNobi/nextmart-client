import { getCurrentUser } from "@/services/AuthServices";
import React from "react";

const HomePage = async () => {
  const user = await getCurrentUser();
  console.log(user);

  return <div>Wellcome to next mart</div>;
};

export default HomePage;
