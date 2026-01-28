export default interface Employee {
    name : string,
    email : string,
    phone : string,
    country? : string,
    summary? : string,
    skills? : string[],
    education? : EducationDetails[],
    additionalInfo : AdditionalInfo[]

}

export interface EducationDetails{
    degree : string,
    instituition : string,
    year : string
}

export type AdditionalInfoCategory = "Certificate" | "Award";

export interface AdditionalInfo {
  category: AdditionalInfoCategory; // required in schema
  title: string;                    // required in schema
  organization?: string;
  year?: string;
}