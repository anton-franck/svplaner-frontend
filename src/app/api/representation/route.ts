import { NextResponse } from "next/server";
import { getCachedRepresentation } from "@/lib/vertretung.service";

export async function GET() {
  try {
    const data = await getCachedRepresentation();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch representation data" },
      { status: 500 }
    );
  }
}
