import fs from "fs";
import path from "path";
import marked from "marked";

function getAllPosts(filesPath) {
  const data = fs.readdirSync(filesPath).map((fileName) => {
    const post = fs.readFileSync(path.resolve(filesPath, fileName), "utf-8");
    console.log("post", post);
    const renderer = new marked.Renderer();
    const html = marked(post, { renderer });
    return {
      title: "A new post",
      slug: "a-new-post",
      html,
    };
  });
  return data;
}

export function get(req, res) {
  const posts = getAllPosts("src/posts");

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(posts));
}
