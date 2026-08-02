import { useEffect } from "react";
import { useSecret } from "../hooks/useSecret";
import { useInputTWE } from "../hooks/useInputTWE";

export function DbPassword({ setPassword }) {
  useInputTWE();
  const [password, handleSubmit] = useSecret("password");
  useEffect(componentDidUpdate, [password]);

  let message = "";
  if (password) message = "Password was entered,";
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-3" data-twe-input-wrapper-init>
          <input
            type="password"
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
            name="password"
            id="password"
            placeholder="Example label"
          />
          <label
            htmlFor="password"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
            Database Password:
          </label>
        </div>

        <button
          type="submit"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
          Submit
        </button>
      </form>
      <output>{message} </output>
    </>
  );

  function componentDidUpdate() {
    setPassword(password);
  }
}
