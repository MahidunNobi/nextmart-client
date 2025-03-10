import ManageBrand from "@/components/modules/shop/Brand";
import { getAllBrands } from "@/services/Brand";

import React from "react";

const BrandPage = async () => {
  const { data, meta } = await getAllBrands();

  return (
    <div>
      <ManageBrand categories={data} />
    </div>
  );
};

export default BrandPage;
