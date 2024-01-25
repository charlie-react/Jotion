"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { MenuIcon } from "lucide-react";
import Title from "./Title";
import Banner from "./Banner";
import Menu from "./Menu";

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth?: () => void;
}

const Navbar = ({ isCollapsed, onResetWidth }: NavbarProps) => {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4 justify-between">
        <Title.Skeleton />
        <Menu.Skeleton/>
      </nav>
    );
  }

  if (document === null) {
    return null;
  }

  return (
    <>
      <nav className="bg-background dark:bg-[#1F1F1F] px-3 py-2 w-full flex items-center gap-x-4">
        {isCollapsed && (
          <MenuIcon
            role="button"
            onClick={onResetWidth}
            className="w-6 text-muted-foreground h-6"
          />
        )}
        <div className="w-full flex items-center justify-between  ">
          <Title initialData={document} />
          <div className="flex items-center gap-x-2">
            <Menu documentId={document._id}/>
          </div>
        </div>
      </nav>
      {document.isArchived && (
        <Banner documentId={document._id}/>
      )}
    </>
  );
};

export default Navbar;
