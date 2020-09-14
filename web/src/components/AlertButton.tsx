import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button
} from "@chakra-ui/core";

interface AlertButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => (e: React.MouseEvent) => void;
  cancelRef: React.RefObject<HTMLElement>;
}

export const AlertButton: React.FC<AlertButtonProps> = ({
  isOpen,
  setIsOpen,
  cancelRef
}) => {
  const onClose = () => setIsOpen(false);
  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          setIsOpen;
        }}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="red" onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
