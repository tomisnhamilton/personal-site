import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        <Link href={"./portfolio"}>
          <h2 className="mb-3 text-2xl font-semibold">
            Portfolio{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            My Personal Portfolio.
          </p>
        </Link>

        <Link href={"./financial-tracker"}>
          <h2 className="mb-3 text-2xl font-semibold">
            Financial Tracker{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Web-based financial tracker (auth required).
          </p>
        </Link>

        <Link href={"./ctf"}>
          <h2 className="mb-3 text-2xl font-semibold">
            CTF{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Practice CTF.
          </p>
        </Link>
      </div>
    </main>
  );
}
