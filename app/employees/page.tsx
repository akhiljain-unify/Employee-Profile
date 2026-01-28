import EmployeesList from "@/components/employees/EmployeeList"
import Link from "next/link";

export default function EmployeesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Employees</h1>
        <Link
          href="/employees/add"
          className="px-4 py-2 bg-black text-white rounded-md text-sm"
        >
          Add Employee
        </Link>
      </div>

      <EmployeesList />
    </div>
  );
}
