import { NextResponse } from "next/server";
import connectDB from "../../../database/connection";

export const GET = async (req: Request, res: Response) => {
  const database: Boolean = await connectDB();
  return NextResponse.json({ server: true, database });
};
