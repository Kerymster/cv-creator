export const getSizeClasses = ({size}: {size: 'sm' | 'md' | 'lg'}) => {
    switch (size) {
      case 'sm':
        return 'p-1.5';
      case 'lg':
        return 'p-3';
      default:
        return 'p-2';
    }
  };

  export const getVariantClasses = ({variant}: {variant: 'primary' | 'secondary' | 'ghost'}) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500';
      case 'secondary':
        return 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500';
      default:
        return 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:ring-gray-500';
    }
  };

  export const getIconSize = ({size}: {size: 'sm' | 'md' | 'lg'}) => {
    switch (size) {
      case 'sm':
        return 'h-3 w-3';
      case 'lg':
        return 'h-5 w-5';
      default:
        return 'h-4 w-4';
    }
  };