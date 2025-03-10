"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type PropTypes = {
  name: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  onConfirm: () => void;
};

const DeleteConfirmationModel = ({
  isOpen,
  onOpenChange,
  onConfirm,
  name,
}: PropTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Item?</DialogTitle>
        </DialogHeader>
        {/* ------------- Actual Form----------- */}
        <div>
          <p>
            This action is not reversable. Are you sure you want to delete this{" "}
            {name}?
          </p>
          <div className="text-right mt-6">
            <Button
              variant={"destructive"}
              onClick={() => {
                onConfirm();
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModel;
