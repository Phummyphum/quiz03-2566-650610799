import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Phumrapee Tapwong",
    studentId: "650610799",
  });
};
