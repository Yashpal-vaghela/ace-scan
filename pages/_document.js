import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQO6pvPtY2mHU2SKVrtdE1c7mfF8T1ZrA7Ay6cwn2jT4M5gE6jIWstlDb"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-2pOCDj4I22A6blf+jzJFeDnpfH74azXs6F3ICDhLScgGkp4j6hYLI6omzUjqUIvG"
          crossorigin="anonymous"
          defer
        ></script>
      </body>
    </Html>
  );
}
