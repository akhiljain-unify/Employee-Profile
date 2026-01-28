"use client"

import { WidgetProps } from "@rjsf/utils"

export default function TextWidget(props : WidgetProps){
    const {id,value,required,disabled,readonly,onChange,placeholder} = props
    return (
        <input
            id = {id}
            type="text"
            value = {value ||  ''} 
            onChange={(e) => onChange(e.target.value)}
            disabled = {disabled || readonly}
            placeholder={placeholder}
            required = {required}
            className="flex items-center w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
    )
}