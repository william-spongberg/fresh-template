import { type PageProps } from "$fresh/server.ts";
import * as Layout from "../components/Layout.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>fresh-template</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Layout.Header title="fresh-template" />
        <Component />
        <Layout.Footer
          isBeta
          author="Author"
        />
      </body>
    </html>
  );
}
