import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  console.log("endpoint pinged");
  const body = await req.json();
  console.log(body);
  const result = await dbQuery({
    sql: "INSERT INTO docs (title, content) VALUES(?, ?)",
    values: [`${body.title}`, `${body.content}`]
  });
  return NextResponse.json(result);
}
