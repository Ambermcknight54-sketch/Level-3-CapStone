import { useRippleTWE } from "../hooks/useRippleTWE";
import { useRedirect } from "../hooks/useRedirect";

export function Extras() {
  useRippleTWE();
  const handleRedirect = useRedirect("/", 5000);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1>404 - Page Not Found</h1>
      <p>You will be automatically redirected to the home page in 5 seconds.</p>

      <button
        type="button"
        data-twe-ripple-init
        data-twe-ripple-color="light"
        className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleRedirect}>
        Go Home Now
      </button>
    </main>
  );
}
