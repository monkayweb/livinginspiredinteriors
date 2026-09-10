import Link from "next/link";

export default function NotFound() {
  return (
    <section
      data-surface="dark"
      className="flex min-h-[80svh] items-center bg-ink text-paper"
    >
      <div className="shell flex flex-col gap-8">
        <h1 className="display text-[18vw] leading-[0.85] md:text-[10vw]">
          Not found
        </h1>
        <p className="t-body max-w-[40ch] opacity-60">
          The page you were looking for has moved or no longer exists.
        </p>
        <Link href="/" className="link-underline t-body w-fit">
          Back to the studio
        </Link>
      </div>
    </section>
  );
}
