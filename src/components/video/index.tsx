"use client";

import { getFileAsset } from "@sanity/asset-utils";

export default function BlockVideo({asset, type}) {
  const fileAsset = getFileAsset(asset, {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET
  });

  const setVideoRef = (el: HTMLVideoElement | null) => {
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? el.play() : el.pause()),
      { threshold: 0.5 }
    )
    observer.observe(el)
  }
  
  const url = typeof fileAsset === "string" ? fileAsset : fileAsset.url ?? "";
  
  return (
    <video ref={setVideoRef} autoPlay muted playsInline loop>
    <source src={url} type={type ?? 'video/mp4'} />
    </video>
  )
}