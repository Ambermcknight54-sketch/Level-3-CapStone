// src/components/Logout.jsx
import { useRef } from "react";
import { useModalTWE } from "../hooks/useModalTWE";

export function Logout({ setLogin }) {
  useModalTWE();

  // Reference to the close button element
  const ref = useRef(null);

  function handleLogout() {
    ref.current?.click();

    const emptyCredentials = {
      username: "",
      password: "",
    };

    // 3. Save and persist empty user credentials to localStorage
    localStorage.setItem("user", JSON.stringify(emptyCredentials));

    // 4. Use setLogin to save the data object in state
    setLogin(emptyCredentials);
  }

  return (
    <>
      {/* Button trigger for logoutModal */}
      <button
        type="button"
        className="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:outline-none"
        data-twe-toggle="modal"
        data-twe-target="#logoutModal"
        data-twe-ripple-init
        data-twe-ripple-color="light">
        Log Out
      </button>

      {/* TWE Modal */}
      <div
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="logoutModal"
        tabIndex="-1"
        aria-labelledby="logoutModalLabel"
        aria-hidden="true"
        data-twe-modal-init>
        <div
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
          data-twe-modal-dialog-ref>
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-4 outline-none dark:bg-surface-dark">
            {/* Modal Header */}
            <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 p-4 dark:border-white/10">
              <h5
                className="text-xl font-medium leading-normal text-surface dark:text-white"
                id="logoutModalLabel">
                Logout Confirmation
              </h5>
              <button
                type="button"
                ref={ref}
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-twe-modal-dismiss
                aria-label="Close">
                <span className="[&>svg]:h-6 [&>svg]:w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    q
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Modal Body */}
            <div
              className="relative flex-auto p-4 dark:text-white"
              data-twe-modal-body-ref>
              Are you sure you want to logout?
            </div>

            {/* Modal Footer / Action Buttons */}
            <div className="flex flex-wrap items-center justify-end flex-shrink-0 gap-2 rounded-b-md border-t-2 border-neutral-100 p-4 dark:border-white/10">
              <button
                type="button"
                className="inline-block rounded bg-neutral-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 transition duration-150 ease-in-out hover:bg-neutral-300 focus:outline-none dark:bg-neutral-600 dark:text-white dark:hover:bg-neutral-500"
                data-twe-modal-dismiss>
                Cancel
              </button>
              <button
                onClick={handleLogout}
                type="button"
                className="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:outline-none">
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import {} from "../hooks/";

export function Logout({ setLogin }) {
  function handleLogout() {
    setLogin(null);
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="inline-block rounded bg-red-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 focus:outline-none">
      Log Out
    </button>
  );
}
