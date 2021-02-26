import React, { useState } from 'react'
import s from './counter.module.css'

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)

    const increment = () => {
        setCounter((prev: number) => prev < 5 ? prev + 1 : prev)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <div className={s.counter_wrapper.concat(' ', counter > 4 ? s.limit : '')}>
            <div className={s.counter}>
                <CounterValue countVal={counter} />
                <div className={s.btns}>
                    <Button onClick={increment} disabled={counter > 4} name={'Inc'} />
                    <Button onClick={reset} disabled={counter === 0} name={'Reset'} />
                </div>
            </div>
        </div>
    )
}

type CounterValueType = {
    countVal: number
}
const CounterValue = (props: CounterValueType) => {
    return (
        <div className={s.value}>{props.countVal}</div>
    )
}
type ButtonType = {
    disabled: boolean
    name: string
    onClick: () => void
}
const Button = (props: ButtonType) => {
    return (
        <button onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
    )
}
export { Counter }