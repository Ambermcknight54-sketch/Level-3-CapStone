export function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        To persist login information, user data is serialized with{" "}
        JSON.stringify() and saved into browser storage using{" "}
        localStorage.setItem(. When the app loads or updates,{" "}
        localStorage.getItem() retrieves the stringified data and JSON.parse()
        restores it back into state. To log out a user, the stored credentials
        in localStorage are updated or cleared, and state is reset to an empty
        user object
      </p>
    </main>
  );
}
