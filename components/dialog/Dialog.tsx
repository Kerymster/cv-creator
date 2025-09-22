import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

const Dialog: React.FC<DialogProps> = ({
  children,
  isOpen = true,
  onClose,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}) => {
  useEffect(() => {
    if (!closeOnEscape || !onClose) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closeOnBackdropClick && onClose) {
      onClose();
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-gray-500/70"
      onClick={handleBackdropClick}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden">
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Dialog;
