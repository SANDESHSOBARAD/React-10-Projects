/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import styles from './Button.module.css'

// eslint-disable-next-line no-unused-vars
const Button = ({ isOutLine, icon, text, ...rest}) => {
  return (
    <button
    {...rest}
    className={ isOutLine ? styles.outline_btn : styles.primary_btn}
    >
        {icon}
        {text}
    </button>
  )
}

export default Button