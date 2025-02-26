import ManageCategory from "@/components/modules/shop/Category";
import { getCategories } from "@/services/Category";
import React from "react";

const ProductCategoryPage = async () => {
  const { data, meta } = await getCategories();
  return (
    <div>
      <ManageCategory categories={data} />
    </div>
  );
};

export default ProductCategoryPage;
