import { useEffect } from "react";
import { useControlledInput } from "../hooks/useControlledInput";
import { useInputTWE } from "../hooks/useInputTWE";

export function Search({ setData }) {
  useInputTWE();

  const [name, handleName] = useControlledInput();

  useEffect(componentDidUpdate, [name]);

  function componentDidUpdate() {
    const data = { name };

    setData([data]);
  }

  return (
    <form className="mx-auto my-4 w-full max-w-md">
      <div className="relative mb-3" data-twe-input-wrapper-init="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Product Name"
          value={name}
          onChange={handleName}
          className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-2 leading-[1.6] outline-none focus:border-blue-600"
        />

        <label
          htmlFor="name"
          className="pointer-events-none absolute left-3 top-0 bg-white px-1 text-neutral-500">
          Product Name:
        </label>
      </div>
    </form>
  );
}
