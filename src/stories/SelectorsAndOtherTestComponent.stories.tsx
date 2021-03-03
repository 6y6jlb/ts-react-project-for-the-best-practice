import React, {ChangeEvent, useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';


export default {
  title: 'Test',
} as Meta;

const UncontrolledInput: Story<any> = (args) => <input {...args} />;

export const First = UncontrolledInput.bind({});
First.args = {}


export const TrackValueForUncontrolledInput: Story<any> = () => {
  const [value, setValue] = useState('')
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.value
    setValue(actualValue)
  }
  return <><input value={value} onChange={onChange}/>♦{value}</>
}


export const GetValueForUncontrolledInput: Story<any> = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <><input ref={inputRef}/>
    <button onClick={save}>save</button>
    actual value is - {value}</>
}

export const CheckBoxTrue: Story<any> = () => <input type={"checkbox"} checked/>

export const CheckBoxFalse: Story<any> = () => <input type={"checkbox"} checked={false}/>

export const ControlledCheckBox: Story<any> = () => {
  const [checked, setChecked] = useState(false)
  const onClick = () => setChecked(!checked)
  return <input type={"checkbox"} checked={checked} onClick={onClick}/>
}
export const EventControlledCheckBox: Story<any> = () => {
  const [checked, setChecked] = useState(false)
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const actualValue = event.currentTarget.checked
    setChecked(actualValue)
  }
  return <input type={"checkbox"} checked={checked} onChange={onChange}/>
}

export const ControlledSelect: Story<any> = () => {
  const [parent, setParent] = useState<string | undefined>(undefined)
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const actualValue = event.currentTarget.value
    setParent(actualValue)
  }
  return <select value={parent} onChange={onChange}>
    <option>push</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
}