"use client";

import { useEffect } from "react";
import { registerServiceWorker } from "@/lib/push";

export function RegisterSW() {
  useEffect(() => {
    registerServiceWorker();
  }, []);

  return null;
}
