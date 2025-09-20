import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { getSizeClasses, getVariantClasses, getIconSize } from './helpers';

interface EditButtonProps {
  onClick: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  title?: string;
}

const EditButton: React.FC<EditButtonProps> = ({
  onClick,
  className = '',
  size = 'md',
  variant = 'ghost',
  disabled = false,
  title = 'Edit',
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={` ${getSizeClasses({ size })} ${getVariantClasses({ variant })} focus:ring-opacity-50 rounded-lg transition-all duration-200 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-500 ${className} `}
    >
      <FontAwesomeIcon icon={faEdit} className={getIconSize({ size })} />
    </button>
  );
};

export default EditButton;
