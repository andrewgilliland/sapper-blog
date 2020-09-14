import fs from "fs";
import path from "path";
import marked from "marked";

// const lookup = new Map();
// posts.forEach(post => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  // if (lookup.has(slug)) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const post = fs.readFileSync(
    path.resolve("src/posts", "first-post.md"),
    "utf-8"
  );
  console.log("post", post);
  const renderer = new marked.Renderer();
  const html = marked(post, { renderer });
  const data = {
    title: "A new post",
    slug: "a-new-post",
    html,
  };

  res.end(JSON.stringify(data));
  // } else {
  // 	res.writeHead(404, {
  // 		'Content-Type': 'application/json'
  // 	});

  res.end(
    JSON.stringify({
      message: `Not found`,
    })
  );
}
