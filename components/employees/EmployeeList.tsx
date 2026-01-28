
"use client"
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployees } from '@/app/lib/api/employees'
import EmployeeCard from './EmployeeCard'

const EmployeeList = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ["employees"],
        queryFn: fetchEmployees
    })


    if (isLoading) {
        return <p className="text-gray-500">Loading employees...</p>;
    }

    if (isError) {
    return <p className="text-red-500">Failed to load employees.</p>;
    }

    if (!data || data.length == 0) {
        return <p className="text-gray-500">No employees found.</p>;
    }

    return (
        <div className="grid gap-4 mt-6">
          {data.map((employee: any) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </div>
      );
}

export default EmployeeList