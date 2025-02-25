import React from "react";
import CreateCategoryModel from "./CreateCategoryModel";

const ManageCategory = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Manage Category</h1>
      <CreateCategoryModel />
    </div>
  );
};

export default ManageCategory;
