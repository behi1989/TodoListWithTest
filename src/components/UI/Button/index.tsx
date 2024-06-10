import { FC } from 'react'
import { ButtonType } from './button.type'
import { Spinner } from '..'

const Button: FC<ButtonType> = ({
    label,
    className='',
    type='button',
    isLoading=false,
    disabled=false,
    hasIcon=false,
    icon,
    spinnerType='dot',
    spinnerColor='#000',
    onClick,
    ...rest
}) => {
  return (
    <button
        className={`w-max h-10 rounded-md cursor-pointer bg-light-gray text-dark-gray px-2 ${className}`}
        {...rest}
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
    >
        <div className="w-max flex gap-2 items-center">
            {label && <span>{label}</span>}
            {hasIcon && icon}
            {isLoading && <Spinner type={spinnerType} color={spinnerColor}  />}
        </div>
    </button>
  )
}

export default Button