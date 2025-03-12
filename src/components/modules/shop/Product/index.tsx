"use client";
import React, { useState } from "react";
import { TCategory } from "@/types/category";
import { NMTable } from "@/components/ui/core/NMTable/NMTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { deleteCategory } from "@/services/Category";
import { toast } from "sonner";
import { Trash } from "lucide-react";
import DeleteConfirmationModel from "@/components/ui/core/NMModel/DeleteConfirmationModel";
import CreateProductModel from "./CreateProductModel";

type TManageCategoryProps = {
  categories: TCategory[];
};

const ManageProduct = ({ categories }: TManageCategoryProps) => {
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
      header: () => <div>Product Name</div>,
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
      accessorKey: "category",
      header: () => <div>Category</div>,
      cell: ({ row }) => <div></div>,
    },
    {
      accessorKey: "brand",
      header: () => <div>Brand</div>,
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
    {
      accessorKey: "stock",
      header: () => <div>Stock</div>,
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
    {
      accessorKey: "price",
      header: () => <div>Price</div>,
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
    {
      accessorKey: "offerPrice",
      header: () => <div>Offer Price</div>,
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
      <div className="flex justify-between items-center my-6">
        <h1 className="text-2xl font-semibold">Manage Products</h1>
        <CreateProductModel />
      </div>
      <NMTable data={[]} columns={columns} />
      <DeleteConfirmationModel
        name="Brand"
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        onConfirm={() => handleDeleteConfirm()}
      />
    </div>
  );
};

export default ManageProduct;
