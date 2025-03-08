"use client";
import React from "react";
import CreateCategoryModel from "./CreateCategoryModel";
import { TCategory } from "@/types/category";
import { NMTable } from "@/components/ui/core/NMTable/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import DeleteCategoryModel from "./DeleteCategoryModel";
import { deleteCategory } from "@/services/Category";

type TManageCategoryProps = {
  categories: TCategory[];
};

const ManageCategory = ({ categories }: TManageCategoryProps) => {
  const handleDelete = async (id: string) => {
    const res = await deleteCategory(id);
    console.log(res);
  };

  const columns: ColumnDef<TCategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={"https://github.com/shadcn.png"}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div>isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        // <button
        //   className="text-red-500"
        //   title="Delete"
        //   onClick={() => handleDelete(row.original)}
        // >
        //   <Trash className="w-5 h-5" />
        // </button>
        <DeleteCategoryModel
          handleDelete={handleDelete}
          id={row.original._id}
        />
      ),
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Manage Category</h1>
        <CreateCategoryModel />
      </div>
      <NMTable data={categories} columns={columns} />
    </div>
  );
};

export default ManageCategory;
