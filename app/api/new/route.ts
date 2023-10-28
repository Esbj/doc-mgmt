import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  console.log("endpoint pinged");
  const result = await dbQuery({
    sql: "INSERT INTO docs (title, content) VALUES(?, ?)",
    values: ["title 1", "this is my content"]
  });
  return NextResponse.json(result);
}
