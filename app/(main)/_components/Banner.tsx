"use client";

import ConfirmModal from "@/components/modals/ConfirmModal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface BannerProps {
  documentId: Id<"documents">;
}

const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const restore = useMutation(api.documents.restoreArchived);
  const remove = useMutation(api.documents.remove);

  const onRestore = () => {
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored",
      error: "Failed to restore note",
    });
    router.push("/documents");
  };

  const onRemove = () => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Removing note...",
      success: "Note removed",
      error: "Failed to remove note",
    });
    router.push("/documents");
  };
  return (
    <div className="w-full flex items-center text-center text-sm justify-center bg-rose-500 text-white p-2 gap-x-2  ">
      <p>This page is in the trash.</p>
      <Button
        variant={"outline"}
        size={"sm"}
        className="bg-transparent hover:text-white text-white hover:bg-primary/5 p-1 px-2 h-auto border-white font-normal "
        onClick={onRestore}
      >
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          variant={"outline"}
          size={"sm"}
          className="bg-transparent hover:text-white text-white hover:bg-primary/5 p-1 px-2 h-auto border-white font-normal"
        >
          Delete Forever
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default Banner;
