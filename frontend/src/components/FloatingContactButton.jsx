// import React from "react";
// import { useContactModal } from "../context/ContactContext.jsx";

// export default function FloatingContactButton() {
//   const { openContact } = useContactModal();

//   return (
//     <button
//       type="button"
//       onClick={() => openContact("Floating Button")}
//       aria-label="Enquire Now"
//       className="
//         group
//         fixed
//         left-1/2
//         bottom-4
//         z-50
//         -translate-x-1/2

//         flex
//         w-fit
//         min-w-[190px]
//         items-center
//         justify-center
//         gap-2
//         px-6
//         py-3.5

//         rounded-full
//         bg-[#C9A24B]
//         text-white
//         text-[10px]
//         font-semibold
//         tracking-[0.18em]
//         uppercase
//         whitespace-nowrap

//         shadow-[0_8px_25px_rgba(0,0,0,0.18)]
//         transition-all
//         duration-300

//         hover:bg-[#B8903F]
//         hover:shadow-[0_12px_35px_rgba(0,0,0,0.25)]
//         hover:-translate-y-1
//         active:scale-95

//         sm:bottom-5

//         lg:left-auto
//         lg:right-6
//         lg:bottom-6
//         lg:translate-x-0

//         lg:min-w-0
//         lg:px-7
//         lg:py-4
//         lg:text-[11px]
//         lg:tracking-[0.22em]

//         xl:right-7
//         xl:bottom-7
//         xl:px-8
//         xl:py-4
//         xl:text-xs
//         xl:tracking-[0.25em]
//       "
//     >
//       <span>Enquire Now</span>
//     </button>
//   );
// }


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
        fixed
        left-1/2
        bottom-0
        z-50
        -translate-x-1/2

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
        hover:-translate-y-1
        active:scale-95

        sm:bottom-0

        lg:left-auto
        lg:right-6
        lg:bottom-6
        lg:translate-x-0

        lg:min-w-0
        lg:px-7
        lg:py-4
        lg:text-[11px]
        lg:tracking-[0.22em]

        xl:right-7
        xl:bottom-7
        xl:px-8
        xl:py-4
        xl:text-xs
        xl:tracking-[0.25em]
      "
    >
      <span>Enquire Now</span>
    </button>
  );
}