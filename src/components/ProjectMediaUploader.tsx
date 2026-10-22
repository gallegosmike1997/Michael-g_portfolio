"use client";

import { ChangeEvent, useState } from "react";

type UploadedMedia = { url: string; name: string; contentType: string };

export default function ProjectMediaUploader() {
  const [uploads, setUploads] = useState<UploadedMedia[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleFiles(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    setIsUploading(true);
    setMessage("");

    try {
      const results: UploadedMedia[] = [];
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await fetch("/api/project-media", { method: "POST", body: formData });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error ?? "Upload failed");
        results.push(data);
      }
      setUploads((current) => [...results, ...current]);
      setMessage(`${results.length} file${results.length === 1 ? "" : "s"} uploaded successfully.`);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Upload failed. Try again.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  return (
    <section className="media-uploader" aria-labelledby="media-uploader-title">
      <div>
        <div className="section-kicker">Project media</div>
        <h2 id="media-uploader-title">Add screenshots and screen recordings.</h2>
        <p>Upload visual proof of your builds. Images and videos are stored in Vercel Blob and can be added to a case study.</p>
      </div>
      <label className="upload-dropzone">
        <input type="file" accept="image/*,video/mp4,video/webm,video/quicktime" multiple onChange={handleFiles} disabled={isUploading} />
        <strong>{isUploading ? "Uploading…" : "Choose screenshots or recordings"}</strong>
        <span>JPG, PNG, WEBP, GIF, MP4, WEBM, or MOV · up to 250 MB each</span>
      </label>
      {message && <p className="upload-message" role="status">{message}</p>}
      {uploads.length > 0 && <div className="media-grid">{uploads.map((media) => <article className="media-card" key={media.url}>{media.contentType.startsWith("video/") ? <video src={media.url} controls preload="metadata" /> : <img src={media.url} alt={media.name} /> }<span>{media.name}</span></article>)}</div>}
    </section>
  );
}
