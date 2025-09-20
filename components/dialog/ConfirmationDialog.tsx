import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Dialog from './Dialog';

interface ConfirmationDialogProps {
  children: React.ReactNode;
  title?: string;
  onConfirm?: () => void;
  onReject?: () => void;
  onClose?: () => void;
  onBack?: () => void;
  negativeMessage?: string;
  positiveMessage?: string;
  hasDangerousAction?: boolean;
  isButtonDisabled?: boolean;
  isRejectButtonDisabled?: boolean;
  actLikeForm?: boolean;
  hasCloseButton?: boolean;
  hasConfirmButton?: boolean;
  hasHeader?: boolean;
  maxWidth?: string;
  titleIcon?: React.ReactNode;
  contentPadding?: string;
  allowOverflow?: boolean;
  contentAbove?: React.ReactNode;
  contentBelow?: React.ReactNode;
  bottomBarDetail?: React.ReactNode;
  onPressEnter?: () => void;
  styleOverrides?: React.CSSProperties;
  isOpen?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

const FormContainer: React.FC<{
  handleConfirm: () => void;
  isButtonDisabled: boolean;
  children: React.ReactNode;
}> = ({ handleConfirm, isButtonDisabled, children }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isButtonDisabled) {
      handleConfirm();
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
  hasDangerousAction?: boolean;
  disabled?: boolean;
}> = ({ children, onClick, primary, hasDangerousAction, disabled = false }) => {
  const baseClasses =
    'px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100';

  let buttonClasses = baseClasses;

  if (primary && hasDangerousAction) {
    buttonClasses +=
      ' bg-red-600 text-white hover:bg-red-700 focus:ring-red-500';
  } else if (primary) {
    buttonClasses +=
      ' bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500';
  } else {
    buttonClasses +=
      ' bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500';
  }

  return (
    <button
      disabled={disabled}
      className={`${buttonClasses} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  children,
  title,
  onConfirm,
  onReject,
  onClose,
  onBack,
  negativeMessage,
  positiveMessage = 'OK',
  hasDangerousAction = false,
  isButtonDisabled = false,
  isRejectButtonDisabled = false,
  actLikeForm = false,
  hasCloseButton = true,
  hasConfirmButton = true,
  hasHeader = true,
  maxWidth = '480px',
  titleIcon,
  contentPadding = '0 18px 24px',
  allowOverflow = false,
  contentAbove,
  contentBelow,
  bottomBarDetail,
  onPressEnter,
  styleOverrides,
  isOpen = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}) => {
  useEffect(() => {
    if (!onPressEnter) return;

    const handlePressKeys = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !isButtonDisabled) {
        e.preventDefault();
        onPressEnter();
      }
    };

    document.addEventListener('keydown', handlePressKeys);
    return () => document.removeEventListener('keydown', handlePressKeys);
  }, [onPressEnter, isButtonDisabled]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (onReject) {
      onReject();
    }
  };

  return (
    <Dialog
      isOpen={isOpen}
      onClose={handleClose}
      closeOnBackdropClick={closeOnBackdropClick}
      closeOnEscape={closeOnEscape}
    >
      {contentAbove && contentAbove}

      <div
        className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl"
        style={{ maxWidth, ...styleOverrides }}
      >
        {hasHeader && (
          <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
            <div className="flex items-center gap-3">
              {onBack && (
                <button
                  onClick={onBack}
                  className="cursor-pointer rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-800"
                  title="Go back"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
                </button>
              )}
              <div className="flex items-center gap-2">
                {titleIcon && (
                  <span className="text-gray-600">{titleIcon}</span>
                )}
                {title && (
                  <h2 className="text-lg font-semibold text-gray-900">
                    {title}
                  </h2>
                )}
              </div>
            </div>

            {hasCloseButton && (
              <button
                onClick={handleClose}
                className="cursor-pointer rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-200 hover:text-gray-600"
                title="Close"
              >
                <FontAwesomeIcon icon={faTimes} className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

        <div
          className="bg-white"
          style={{
            padding: contentPadding,
            overflow: allowOverflow ? 'visible' : 'auto',
            maxHeight: 'calc(90vh - 200px)',
          }}
        >
          {actLikeForm ? (
            <FormContainer
              isButtonDisabled={isButtonDisabled}
              handleConfirm={onConfirm || (() => {})}
            >
              {children}
            </FormContainer>
          ) : (
            children
          )}
        </div>

        {(hasConfirmButton || negativeMessage) && (
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            {bottomBarDetail && (
              <div className="mb-3 text-sm text-gray-600">
                {bottomBarDetail}
              </div>
            )}

            <div className="flex justify-end gap-3">
              {negativeMessage && (
                <Button
                  onClick={onReject || onClose}
                  disabled={isRejectButtonDisabled}
                >
                  {negativeMessage}
                </Button>
              )}

              {hasConfirmButton && (
                <Button
                  disabled={isButtonDisabled}
                  onClick={onConfirm || onClose}
                  primary
                  hasDangerousAction={hasDangerousAction}
                >
                  {positiveMessage}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {contentBelow && contentBelow}
    </Dialog>
  );
};

export default ConfirmationDialog;
