"use client";

import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <ClipLoader color="#10B981" size={60} />
    </div>
  );
}
