// json schema of the add employee
import { RJSFSchema, UiSchema } from "@rjsf/utils";

export const employeeSchema: RJSFSchema = {
    type: 'object',
    required : ["name","email","phone","skills"],
    properties: {
        name: {
            type: "string",
            title: "Full Name"
        },
        email: {
            type: "string",
            title: "Email",
            format: "email"
        },
        phone: {
            type: "string",
            title: "Phone Number"
        },
        country: {
            type: "string",
            title: "Country"
        },
        summary: {
            type: "string",
            title: "Professional Summary"
        },
        skills: {
            type: "array",
            title: "Skills",
            items: {
                type: "string",

            }
        },
        education: {
            type: 'array',
            title: "Education",
            items: {
                type: "object",
                properties: {
                    degree: {
                        type: "string",
                        title: "Degree"

                    },
                    institution: {
                        type: "string",
                        title: "Institution"
                    },
                    year: {
                        type: "string",
                        title: "Year of Completion"
                    }
                }
            }
        },
        additionalInfo: {
            type: "array",
            title: "Additional Information",
            items: {
                type: "object",
                required: ["category", "title"],
                properties: {
                    category: {
                        type: "string",
                        title: "Type",
                        enum: ["Certificate", "Award"]
                    },
                    title: {
                        type: "string",
                        title: "Title"
                    },
                    organization: {
                        type: "string",
                        title: "Issuing Organization"
                    },
                    year: {
                        type: "string",
                        title: "Year"
                    }
                }
            }
        }
    }
}

export const employeeUiSchema: UiSchema = {
    summary: {
        "ui:widget": "TextareaWidget"
    }
};