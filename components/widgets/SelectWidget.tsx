"use client";

import { WidgetProps } from "@rjsf/utils";

export default function SelectWidget(props: WidgetProps) {
  const { id, value, required, disabled, readonly, options, onChange } = props;

  return (
    <select
      id={id}
      value={value || ""}
      required={required}
      disabled={disabled || readonly}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-black"
    >
      <option value="">Select...</option>
      {options.enumOptions?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
