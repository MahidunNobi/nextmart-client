"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();
  console.log(user);

  return <div>Wellcome to next mart</div>;
};

export default HomePage;
