import { Link, useLocation } from "react-router-dom";
import "highlight.js/styles/github-dark-dimmed.css";
import styles from "./article.module.css";
import { useState, useEffect } from "react";
import hljs from "highlight.js";
import { parse } from "marked";

function Article() {
  const [found, setFound] = useState<boolean | null>(null);
  const [markdown, setMarkdown] = useState<string | null>(null);
  const path = useLocation().pathname;

  useEffect(() => {
    setMarkdown(null);
    setFound(null);
    const file = `/content/${
      path == "/" ? "index.md" : `${path.slice(1, path.length)}.md`
    }`;
    fetch(file).then((response) => {
      if (response.headers.get("Content-Type") == "text/markdown") {
        response.text().then((text) => {
          setMarkdown(text);
          setFound(true);
        });
      } else {
        setFound(false);
      }
    });
  }, [path]);

  useEffect(() => {
    hljs.highlightAll();
  }, [found, markdown]);

  return found == null ? (
    <article className={styles.article}>
      <p>Loading...</p>
    </article>
  ) : found == false ? (
    <article className={styles.article}>
      <h1>404 - Not found</h1>
      <p>Page not found</p>
    </article>
  ) : (
    <article
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: parse(markdown || "") }}
    />
  );
}

export default Article;
