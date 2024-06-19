import { FC } from "react"
import { CardType } from "./Card.type"

const Card:FC<CardType> = ({
    hasLabel, 
    label, 
    labelClass='', 
    children, 
    className='',
    ...rest
}) => {
  return (
    <div className={`bg-dark-gray min-h-[100px] p-2 shadow-md rounded-lg ${className}`} {...rest}>
        {hasLabel && (
            <div className="flex justify-start items-center pb-2 mb-2 border-b border-darker-gray">
                <h4 className={`text-white text-base font-bold ${labelClass}`}>{label}</h4>
            </div>
        )}
        <div className="space-y-2">
            {children}
        </div>
    </div>
  )
}

export default Card