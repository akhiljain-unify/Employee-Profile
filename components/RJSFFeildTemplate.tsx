"use client";

import { FieldTemplateProps } from "@rjsf/utils";

export default function RJSFFieldTemplate(props: FieldTemplateProps) {
  const { id, label, required, children, errors } = props;

  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {children}

      {errors && (
        <div className="text-sm text-red-500 mt-1">
          {errors}
        </div>
      )}
    </div>
  );
}
