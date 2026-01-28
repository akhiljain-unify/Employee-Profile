


import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import Employee from "@/app/interfaces/employeeInterface";

// TODO: Later connect to a DB 
const filePath = path.join(process.cwd(), "data", "employees.json");

export async function GET(){
  const data = fs.readFileSync(filePath, "utf-8");
  const employees : Employee[] = JSON.parse(data);
  return NextResponse.json(employees);
}

export async function POST(req: Request) {
  const newEmployee = await req.json();

  const data = fs.readFileSync(filePath, "utf-8");
  const employees = JSON.parse(data);

  const employeeWithId = {
    id: Date.now().toString(),
    ...newEmployee
  };

  employees.push(employeeWithId);

  fs.writeFileSync(filePath, JSON.stringify(employees, null, 2));

  return NextResponse.json(employeeWithId);
}
