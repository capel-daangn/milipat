"use client";

import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-2">
      <Spinner size={"lg"}></Spinner>
    </div>
  );
}
