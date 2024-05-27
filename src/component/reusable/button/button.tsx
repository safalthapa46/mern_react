import classNames from 'classnames'
interface props{
    buttonType: any,
    rounded?: boolean,
    children: any,
    buttonColor:{
        primary?:boolean,
        secondary?:boolean,
        outline?:boolean,
    }
}

const Button = ({buttonType, rounded, children, buttonColor}:props) => {
  return (
   <button type={buttonType}
   className={classNames(
    'px-4 py-2',
    buttonColor.primary && "bg-amber-500 text-white",
    buttonColor.secondary && "bg-rose-500 text-white",
    buttonColor.outline && "text-amber-500 bg-white border border-amber-500",
    rounded? "rounded-full" :"rounded-lg"
   )}>
    {children}
   </button>
  )
}

export default Button
