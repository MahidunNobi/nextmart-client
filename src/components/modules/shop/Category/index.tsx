"use client";
import React, { useState } from "react";
import CreateCategoryModel from "./CreateCategoryModel";
import { TCategory } from "@/types/category";
import { NMTable } from "@/components/ui/core/NMTable/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { deleteCategory } from "@/services/Category";
import { toast } from "sonner";
import { Trash } from "lucide-react";
import DeleteConfirmationModel from "@/components/ui/core/NMModel/DeleteConfirmationModel";

type TManageCategoryProps = {
  categories: TCategory[];
};

const ManageCategory = ({ categories }: TManageCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleDelete = async (id: string) => {
    setIsOpen(true);
    setSelectedId(id);
  };
  const handleDeleteConfirm = async () => {
    try {
      const res = await deleteCategory(selectedId);

      if (res.success) {
        setIsOpen(false);
        setSelectedId("");
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns: ColumnDef<TCategory>[] = [
    {
      accessorKey: "name",
      header: () => <div>Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon || "https://github.com/shadcn.png"}
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
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original._id)}
        >
          <Trash className="w-5 h-5" />
        </button>
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
      <DeleteConfirmationModel
        name="Brand"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={() => handleDeleteConfirm()}
      />
    </div>
  );
};

export default ManageCategory;
