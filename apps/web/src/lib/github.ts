// https://dub.co/blog/content-collections

export async function getRepo(url: string) {
  const repo = url
    .replace("https://github.com/", "")
    .split("/")
    .slice(0, 2)
    .join("/");
 
  const response = await fetch(`https://api.github.com/repos/${repo}`);
  return response.json();
}