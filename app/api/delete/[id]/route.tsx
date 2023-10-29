import { dbQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params;
  const result = await dbQuery({
    sql: `DELETE FROM docs WHERE docs . id = ?`,
    values: [id]
  });
  return NextResponse.json(result);
}
