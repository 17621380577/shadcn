import { CSSProperties } from 'react';

export interface IButtonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
}
const IButton = (props: IButtonProps) => {
  return (
    <div
      className={`w-fit  flex justify-center items-center rounded-[4px] px-4 py-[6px] bg-[#255EFB] hover:bg-[#255efb8b] cursor-pointer gap-2 ${props.disabled ? 'bg-[#C8CCCF] pointer-events-none cursor-no-drop' : ''} ${props.className} text-[#fff] text-[16px] font-semibold transition-all duration-300`}
      onClick={props.onClick && props.onClick}
      style={props.style}
      suppressHydrationWarning
    >
      {props.icon}
      {props.children}
    </div>
  );
};
export default IButton;
