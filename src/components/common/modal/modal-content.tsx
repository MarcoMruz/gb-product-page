import React from "react";
import HStack from "../h-stack";
import Spacer from "../spacer";
import VStack from "../v-stack";
import { config } from "./modal.config";
import { useModalProps } from "../../../hooks/use-modal-props";
import { FCWithChildren } from "@/types/common";
import { childrenElements, findElement } from "@/utils/utils";

export const ModalHeader: FCWithChildren = ({ children }) => {
  return <div className="border-b border-b-slate-200 w-full">{children}</div>;
};

export const ModalBody: FCWithChildren = ({ children }) => {
  return (
    <div className="my-4 flex-grow overflow-scroll w-full">{children}</div>
  );
};

export const ModalFooter: FCWithChildren = ({ children }) => {
  return (
    <HStack align="center">
      <Spacer />
      {children}
    </HStack>
  );
};

export function ModalCloseButton() {
  const { onClose } = useModalProps();
  return (
    <button
      type="button"
      className="absolute top-0 right-0 pr-3.5 pt-3.5 text-xl text-slate-400"
      onClick={onClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}

export const ModalContent: FCWithChildren = ({ children }) => {
  const { size } = useModalProps();
  const mappedChildren = childrenElements(children);
  const Header = mappedChildren?.find(findElement(ModalHeader));
  const Body = mappedChildren?.find(findElement(ModalBody));
  const Footer = mappedChildren?.find(findElement(ModalFooter));
  const CloseButton = mappedChildren?.find(findElement(ModalCloseButton));

  return (
    <VStack
      className={`absolute sm:max-h-[80%] rounded-lg bg-white p-4 h-full md:h-auto ${config.size[size]}`}
    >
      {CloseButton != null && CloseButton}
      {Header != null && Header}
      {Body != null && Body}
      {Footer != null && Footer}
    </VStack>
  );
};
