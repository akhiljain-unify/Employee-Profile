"use client";

import { WidgetProps } from "@rjsf/utils";

export default function TextAreaWidget(props: WidgetProps) {
  const { id, value, required, disabled, readonly, onChange, placeholder } = props;

  return (
    <textarea
      id={id}
      value={value || ""}
      required={required}
      disabled={disabled || readonly}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      rows={4}
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}
