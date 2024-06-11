import { FC } from "react"
import { TextInputType } from "./input.type"

const Input:FC<TextInputType> = ({id, hasLabel=false, label, labelClass='', className='', ...rest}) => {
  return (
    <div className="w-full">
      {hasLabel && <label htmlFor={id} className={`flex text-sm font-semibold ${labelClass}`}>{label}</label>}
      <input
        id={id}
        className={`w-full h-10 rounded-md text-sm font-medium focus:outline-none px-2 ${className}`} 
        {...rest}
      />

  </div>
  )
}

export default Input