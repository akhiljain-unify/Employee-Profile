"use client";

import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import { employeeSchema,employeeUiSchema } from "@/schemas/employee.Schema"


import TextWidget from "./widgets/TextWidget";
import TextAreaWidget from "./widgets/TextAreaWidget";
import SelectWidget from "./widgets/SelectWidget";
import RJSFFieldTemplate from "./RJSFFeildTemplate";

type EmployeeFormProps = {
  onSubmit: (data: any) => void;
  formData?: any; // used for edit page
};

const widgets = {
  TextWidget,
  TextareaWidget: TextAreaWidget,
  SelectWidget
};

export default function EmployeeForm({
  onSubmit,
  formData
}: EmployeeFormProps) {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
      <Form
        schema={employeeSchema}
        uiSchema={employeeUiSchema}
        validator={validator}
        widgets={widgets}
        templates={{RJSFFieldTemplate}}
        formData={formData}
        onSubmit={(e) => onSubmit(e.formData)}
      />
    </div>
  );
}
