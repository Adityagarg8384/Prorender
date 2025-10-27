"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "./loading2";

export default function LinkWithLoader({ href, children, className = "" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    router.push(href);
  };

  return (
    <div className={`relative ${className}`} onClick={handleClick}>
      {children}
      {loading && <Loading />}
    </div>
  );
}
