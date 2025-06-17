import { useState } from "react";

interface UseToggleResult {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}
export const useToggle = (): UseToggleResult => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  return { isOpen, open, close };
};
