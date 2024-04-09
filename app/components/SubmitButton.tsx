"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="text-textOnLightPrimary dark:text-textOnDarkPrimary text-base font-medium font-work-sans"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
