import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const result = await dbQuery({
    sql: "INSERT INTO docs",
    values: [null, "test", "testdocument 23"]
  });
  return NextResponse.json(result);
}
