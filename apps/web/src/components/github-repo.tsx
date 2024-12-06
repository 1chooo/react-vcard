import { getRepo } from "@/lib/github";
import { Suspense } from "react";
 
export function GithubRepo({ url }: { url: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GithubRepoRSC url={url} />
    </Suspense>
  );
}
 
async function GithubRepoRSC({ url }: { url: string }) {
  const { description, stars, forks } = await getRepo(url);
  return (
    <div className="not-prose grid gap-4 text-light-gray">
      <h3>{description}</h3>
      <p>{stars} stars</p>
      <p>{forks} forks</p>
    </div>
  );
}