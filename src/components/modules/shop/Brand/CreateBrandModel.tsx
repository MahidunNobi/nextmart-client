import { Button } from "@/components/ui/button";
import NMImageUploader from "@/components/ui/core/NMImageUploader";
import ImagePreviewer from "@/components/ui/core/NMImageUploader/ImagePreviewer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createBrand } from "@/services/Brand";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateBrandModel = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreview, setImagePreview] = useState<string[] | []>([]);
  const form = useForm();

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("logo", imageFiles[0] as File);

      const res = await createBrand(formData);

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Create Brand</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Brand</DialogTitle>
        </DialogHeader>
        {/* ------------- Actual Form----------- */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                {imagePreview.length > 0 ? (
                  <ImagePreviewer
                    setImageFiles={setImageFiles}
                    imagePreview={imagePreview}
                    setImagePreview={setImagePreview}
                    className="mt-8"
                  />
                ) : (
                  <div className="mt-8">
                    <NMImageUploader
                      setImageFiles={setImageFiles}
                      setImagePreview={setImagePreview}
                      label="Upload Logo"
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-col md:flex-row items-end justify-between gap-3">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="name"
                          {...field}
                          value={field.value || ""}
                          className=""
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  // disabled={!reCaptachaStatus}
                  type="submit"
                  className="w-[180px]"
                >
                  {isSubmitting ? "Creating..." : "Create"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBrandModel;
