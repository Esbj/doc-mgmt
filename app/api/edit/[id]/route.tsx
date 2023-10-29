import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  console.log("endpoint pinged");
  const body = await req.json();
  console.log(body);

  const result = await dbQuery({
    sql: "UPDATE `docs` SET `title` = ?, `content` = ? WHERE `docs`.`id` = ?",
    values: [`${body.title}`, `${body.content}`, `${body.id}`]
  });
  return NextResponse.json(result);
}
