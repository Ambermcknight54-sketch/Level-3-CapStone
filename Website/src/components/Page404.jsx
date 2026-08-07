// import { useRippleTWE } from "../hooks/useRippleTWE";
// import { useRedirect } from "../hooks/useRedirect";
// import pictureSrc from "../assets/404page-error.png";

// export function Page404() {
//   useRippleTWE();
//   const handleRedirect = useRedirect("/", 5000);

//   return (
//     <main>
//       <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
//         <a href="#!">
//           <img className="rounded-t-lg" src={pictureSrc} alt="" />
//         </a>
//         <div className="p-6 text-surface dark:text-white">
//           <h5 className="mb-2 text-xl font-medium leading-tight">
//             Page Not Found
//           </h5>
//           <p className="mb-4 text-base">This page will redirect in 5 seconds</p>
//           <button
//             onClick={handleRedirect}
//             type="button"
//             className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
//             data-twe-ripple-init
//             data-twe-ripple-color="light">
//             Navigate to the Home Page Button
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }
