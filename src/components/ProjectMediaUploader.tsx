"use client";

import { ChangeEvent, useState } from "react";

type UploadedMedia = { url: string; type: "image" | "video"; name: string };

export default function ProjectMediaUploader() {
  const [media, setMedia] = useState<UploadedMedia[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    if (!files.length) return;
    setUploading(true);
    setError("");

    try {
      const uploads = await Promise.all(files.map(async (file) => {
        const body = new FormData();
        body.append("file", file);
        const response = await fetch("/api/project-media/upload", { method: "POST", body });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error ?? "Upload failed.");
        return result as UploadedMedia;
      }));
      setMedia((current) => [...current, ...uploads]);
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "Upload failed. Please try again.");
    } finally {
      setUploading(false);
      event.target.value = "";
    }
  }

  return (
    <section className="media-uploader" aria-labelledby="media-uploader-title">
      <div>
        <div className="section-kicker">Project media</div>
        <h2 id="media-uploader-title">Add screenshots and screen recordings.</h2>
        <p>Upload images up to 10MB or videos up to 250MB. Uploaded files are stored in Vercel Blob and can be used in project case studies.</p>
      </div>
      <label className="upload-dropzone">
        <input type="file" accept="image/*,video/*" multiple onChange={handleUpload} disabled={uploading} />
        <strong>{uploading ? "Uploading media…" : "Choose files"}</strong>
        <span>PNG, JPG, WEBP, MP4, MOV, or WEBM</span>
      </label>
      {error && <p className="upload-error" role="alert">{error}</p>}
      {media.length > 0 && <div className="media-grid">{media.map((item) => <figure className="media-card" key={item.url}>{item.type === "video" ? <video src={item.url} controls preload="metadata" /> : <img src={item.url} alt={item.name} />}<span>{item.name}</span></figure>)}</div>}
    </section>
  );
}
