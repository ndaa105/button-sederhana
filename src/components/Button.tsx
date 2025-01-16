import React from 'react';
import { IconType } from 'react-icons';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'right' | 'left';
  onClick?: () => void;
  variant?: 'left' | 'right'; 
}

const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  icon: Icon,
  iconPosition = 'left',
  tooltip,
  tooltipPosition = 'top',
  onClick,
  variant = 'right', 
}) => {
  const sizeStyles = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const buttonClass = `button button-${variant} ${sizeStyles[size]}`;
  const tooltipId = `button-tooltip-${label.replace(/\s+/g, '-').toLowerCase()}`; // Membuat ID unik untuk tooltip

  return (
    <>
      <button
        id={tooltipId}
        className={buttonClass}
        onClick={onClick}
      >
        {iconPosition === 'left' && Icon && <Icon className="mr-2" />}
        {label}
        {iconPosition === 'right' && Icon && <Icon className="ml-2" />}
      </button>
      {tooltip && (
        <Tooltip
          anchorId={tooltipId}
          content={tooltip}
          place={tooltipPosition}
        />
      )}
    </>
  );
};

export default Button;