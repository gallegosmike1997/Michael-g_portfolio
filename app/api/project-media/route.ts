import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const allowedTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
]);

const maxFileSize = 250 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Choose an image or video first." }, { status: 400 });
  }

  if (!allowedTypes.has(file.type)) {
    return NextResponse.json({ error: "Use JPG, PNG, WEBP, GIF, MP4, WEBM, or MOV files." }, { status: 415 });
  }

  if (file.size > maxFileSize) {
    return NextResponse.json({ error: "Files must be smaller than 250 MB." }, { status: 413 });
  }

  try {
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const blob = await put(`portfolio-projects/${Date.now()}-${safeName}`, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type,
    });

    return NextResponse.json({ url: blob.url, pathname: blob.pathname, contentType: file.type, name: file.name });
  } catch (error) {
    console.error("Project media upload failed", error);
    return NextResponse.json({ error: "Upload failed. Check the Blob integration and try again." }, { status: 500 });
  }
}
