"use client";

import Image from "next/image";

import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a Note...",
      success: "Created a new Note",
      error: "Failed to create a Note",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        height={"300"}
        width={"300"}
        alt="Empty"
        className="dark:hidden"
        src={"/empty.png"}
      />
      <Image
        height={"300"}
        width={"300"}
        alt="Empty"
        className="dark:block hidden"
        src={"/empty-dark.png"}
      />
      <h2 className="font-medium text-lg">
        Welcome to {user?.firstName}&apos;s Jotion
      </h2>
      <Button onClick={onCreate}>
        <PlusCircle className="w-4 mr-2 h-4  " />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
