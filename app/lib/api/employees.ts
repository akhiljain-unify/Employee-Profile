

import Employee from "@/app/interfaces/employeeInterface"
export async function fetchEmployees() : Promise<Employee[]> {
    const res = await fetch("/api/employees")

    if(!res.ok){
        throw new Error("Failed to Fetch Employees")
    }

    return res.json()
}