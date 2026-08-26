import React from "react";
import { useContactModal } from "../context/ContactContext.jsx";
export default function FloatingContactButton() {
  const { openContact } = useContactModal();
  return (
    <button
      type="button"
      onClick={() => openContact("Floating Button")}
      aria-label="Enquire Now"
      className="
        group
        relative
        mx-auto
        mt-4
        flex
        w-fit
        min-w-[190px]
        items-center
        justify-center
        gap-2
        px-6
        py-3.5
        rounded-full
        bg-[#C9A24B]
        text-white
        text-[10px]
        font-semibold
        tracking-[0.18em]
        uppercase
        whitespace-nowrap
        shadow-[0_8px_25px_rgba(0,0,0,0.18)]
        transition-all
        duration-300
        hover:bg-[#B8903F]
        hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
        active:scale-95
        lg:fixed
        lg:right-6
        lg:bottom-6
        lg:z-40

        lg:mx-0
        lg:mt-0

        lg:min-w-0
        lg:px-7
        lg:py-4

        lg:text-[11px]
        lg:tracking-[0.22em]


        /* =========================================
           LARGE DESKTOP
        ========================================= */
        xl:right-7
        xl:bottom-7

        xl:px-8
        xl:py-4

        xl:text-xs
        xl:tracking-[0.25em]

        hover:-translate-y-1
      "
    >
      <span>Enquire Now</span>

      <span
        className="
          text-base
          sm:text-lg
          leading-none

          transition-transform
          duration-300

          group-hover:translate-x-1
        "
      >
      </span>
    </button>
  );
}