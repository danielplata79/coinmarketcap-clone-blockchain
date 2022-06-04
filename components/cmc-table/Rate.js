import React from 'react'
import ChevronDown from '../../assets/svg/chevronDown'
import ChevronUp from '../../assets/svg/chevronUp'


const styles = {
    rate: `rate flex items-center`,
    red: `mL-2 text-[#EA3943]`,
    green: `mL-2 text-[#18C784]`,
}

const Rate = ({isIncrement, rate}) => {
    return (
        <div className='{styles.rate'>
           { isIncrement ? <ChevronUp fill="#17c784"/> : <ChevronDown fill="#EA3943" />}
           <p className={isIncrement ? styles.green : styles.red}>{rate}</p>
        </div>
    )
}

export default Rate