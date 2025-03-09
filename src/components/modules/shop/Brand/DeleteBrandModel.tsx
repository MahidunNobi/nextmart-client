"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";

type PropTypes = {
  handleDelete: (id: string) => void;
  id: string;
};

const DeleteBrandModel = ({ handleDelete, id }: PropTypes) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-red-500" title="Delete">
          <Trash className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure to delete this brand?</DialogTitle>
        </DialogHeader>
        {/* ------------- Actual Form----------- */}
        <div>
          <p>
            {" "}
            This action is not reversable. Are you sure you want to delete this
            category?{" "}
          </p>
          <div className="text-right mt-6">
            <Button variant={"destructive"} onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBrandModel;
