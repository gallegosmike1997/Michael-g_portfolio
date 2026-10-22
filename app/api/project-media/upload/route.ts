import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 250 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Choose an image or screen recording." }, { status: 400 });
    }

    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");
    const maxSize = isVideo ? MAX_VIDEO_SIZE : MAX_IMAGE_SIZE;

    if (!isImage && !isVideo) {
      return NextResponse.json({ error: "Only image and video files are supported." }, { status: 400 });
    }

    if (file.size > maxSize) {
      return NextResponse.json({ error: `This file is too large. Maximum size is ${isVideo ? "250MB" : "10MB"}.` }, { status: 413 });
    }

    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const blob = await put(`portfolio-media/${Date.now()}-${safeName}`, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type,
    });

    return NextResponse.json({ url: blob.url, pathname: blob.pathname, type: isVideo ? "video" : "image", name: file.name });
  } catch (error) {
    console.error("Project media upload failed:", error);
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 });
  }
}
