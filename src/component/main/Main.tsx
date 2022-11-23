import React from 'react'
import "./main.css"
import {Props} from '../../App'
function Main(props: Props) {
  const [firstInput, setfirstInput] = React.useState<number | undefined>(0)
  const [secondInput, setsecondInput] = React.useState<number | undefined>(0)
  const [firstOption,setFirstOption] = React.useState("AED")
  const [secondOption,setSecondOption] = React.useState("AED")
  const inputHandler = (value:React.ChangeEvent<HTMLInputElement>) => {
    setfirstInput(+value.target.value)
    setsecondInput(props.store.calculateCurrency(firstOption, secondOption, +value.target.value, 1))
  }
  const secondInputHandler = (value:React.ChangeEvent<HTMLInputElement>) => {
    setsecondInput(+value.target.value)
    setfirstInput(props.store.calculateCurrency(firstOption, secondOption, +value.target.value, 2))
  }
  const generateOptions = (obj: {}) => {
    let res = []
    for(let key in obj) {
      if(key !== undefined && key !== null) {
        res.push(key)
      }
    }
    return res
  }
  const optionHandler = (e: React.ChangeEvent<HTMLSelectElement>, number: number) => {
    if(number === 1){
      setFirstOption(e.target.value)
    }else if(number === 2) {
      setSecondOption(e.target.value)
    }
  }
  return (
    <div className='main__wrapper'>
      <h1>Конвертор валют</h1>
    <div className='main__first'>
    <input  value={firstInput} onChange={(e) => {inputHandler(e)}}></input>
    <select className='select' onChange={(e) => {optionHandler(e, 1)}}>
    {generateOptions(props.store.state).sort().map((el, i) => <option key={i}>{el}</option>)}
    </select>
    </div>
    <div className='main__second'>
    <input  value={secondInput} onChange={(e) => {secondInputHandler(e)}}></input>
    <label className='cursor'></label>
    <select className='select' onChange={(e) => {optionHandler(e, 2)}}>
    {generateOptions(props.store.state).sort().map((el, i) => <option key={i}>{el}</option>)}
    </select>
    </div>
    </div>
  )
}

export default Main