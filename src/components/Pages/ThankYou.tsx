"use client";
import { useEffect } from "react";
import { LinkButton } from "../ui/linkButton";

export default function ThankYou() {
  useEffect(() => {
    const orderCompleted = sessionStorage.getItem("orderCompleted");

    if (!orderCompleted) {
      // Redirect to the homepage if the session flag is missing
      window.location.href = "/";
    } else {
      // Clear the session flag after validation
      sessionStorage.removeItem("orderCompleted");
    }
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[90vh] flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-[32px] font-semibold">Tak for din ordre!</h1>
        <p className="text-[18px] mt-4">Vi har modtaget din ordre.</p>
        <div className="text-[16px] font-semibold text-PrimaryGreen mt-6">
          <LinkButton link="/">Gå tilbage til forsiden</LinkButton>
        </div>
      </div>
    </div>
  );
}
