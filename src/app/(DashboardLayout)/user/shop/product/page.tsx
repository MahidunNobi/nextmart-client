import ManageProduct from "@/components/modules/shop/Product";
import { getAllBrands } from "@/services/Brand";

import React from "react";

const ProductPage = async () => {
  const { data, meta } = await getAllBrands();

  return (
    <div>
      <ManageProduct brands={data} />
    </div>
  );
};

export default ProductPage;
