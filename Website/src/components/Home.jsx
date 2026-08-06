export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        To persist user login information, saved user credentials or tokens are
        stored in the browser's localStorage when a user logs in and retrieved
        automatically when the component mounts. To log out a user using a TW
        Elements modal, a confirmation popup is triggered where confirming the
        action clears the stored user data from state and localStorage, while
        programmatically triggering the modal's close button ref to dismiss the
        dialog cleanly.
      </p>
    </main>
  );
}
