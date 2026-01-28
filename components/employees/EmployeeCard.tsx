"use client"
import Employee from '@/app/interfaces/employeeInterface'
import React, { useState } from 'react'

const EmployeeCard = ({employee } : {employee : Employee})  => {

    const [expanded,setExpanded] = useState(false);
  return (
    <div
      className="border rounded-lg p-4 shadow-sm hover:shadow-md transition cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{employee.name}</h2>
          <p className="text-sm text-gray-600">{employee.email}</p>
          <p className="text-sm text-gray-600">{employee.country}</p>
        </div>
      </div>

      {expanded && (
        <div className="mt-4 text-sm text-gray-700 space-y-2">
          <p><strong>Summary:</strong> {employee.summary}</p>

          {Array.isArray(employee.skills) && employee.skills.length > 0 && (
            <p>
              <strong>Skills:</strong> {employee.skills.join(", ")}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default EmployeeCard