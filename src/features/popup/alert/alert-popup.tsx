"use client";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";
import { PopupCommon } from "@/shared/types";
import { AlertDialog } from "@radix-ui/react-alert-dialog";

interface AlertPopupProps extends PopupCommon {
  title: string;
  desc?: string;
  cancelText: string;
  confirmText?: string;
}
export function AlertPopup({
  isOpen,
  close,
  title = "",
  desc,
  cancelText = "닫기",
  confirmText,
  onConfirm,
}: AlertPopupProps) {
  const confirmHandler = () => {
    if (onConfirm) {
      onConfirm();
    }
    close();
  };
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {desc && <AlertDialogDescription>{desc}</AlertDialogDescription>}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={close} className="cursor-pointer">
            {cancelText}
          </AlertDialogCancel>
          {confirmText && (
            <AlertDialogAction
              onClick={confirmHandler}
              className="cursor-pointer"
            >
              {confirmText}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
