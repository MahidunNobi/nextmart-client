"use client";

import { useUser } from "@/context/UserContext";

const HomePage = () => {
  const user = useUser();

  return <div>Wellcome to next mart</div>;
};

export default HomePage;
