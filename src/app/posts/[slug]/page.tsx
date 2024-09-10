import Link from "next/link";
import { draftMode } from "next/headers";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();

  return (
    <div className="container mx-auto px-5">
      <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
        <Link href="/" className="hover:underline">
          Blog
        </Link>
        .
      </h2>
      <article>

      </article>
      <hr className="border-accent-2 mt-28 mb-24" />
      {/*<MoreStories morePosts={morePosts} />*/}
    </div>
  );
}
