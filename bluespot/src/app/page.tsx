import { NavBar } from "./navbar";
import { TopBar } from "./topbar";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="">
        <TopBar />
      </div>
      <div className="">
        <NavBar />
      </div>
    </main>
  );
}

