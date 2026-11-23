import { NextResponse } from "next/server";
import { getYouTubeChannelContent } from "../../../src/lib/youtube";

export const revalidate = 3600; // Cache for 1 hour

export async function GET() {
  try {
    const data = await getYouTubeChannelContent();
    return NextResponse.json({ success: true, ...data }, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

