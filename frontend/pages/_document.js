import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <title>Ace Digital Dental Laboratory</title> */}
        {/* <meta
          name="description"
          content="Ace Digital Dental Laboratory specializes in advanced dentistry, delivering precision-driven, high-quality solutions with cutting-edge technology."
        /> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link rel="stylesheet" href="bower_components/aos/dist/aos.css" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
         <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="icon" type="image/webp" href="/images/fav-icon1.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
          __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ace Digital Dental Lab",
              "alternateName": "Ace Digital Dental Lab | Best Dental Lab In USA",
              "url": "https://acedigitaldentallaboratory.com/",
              "logo": "https://acedigitaldentallaboratory.com/images/ACE-logo.webp",
              "description": "Ace Digital Dental Lab delivers high-quality dental prosthetics and custom digital solutions, trusted by dental professionals worldwide.",
              "address": {
              "@type": "PostalAddress",
              "streetAddress": "1 Auer Court, 2nd Floor East Brunswick, New Jersey 08816",
              "addressLocality": "New Jersey",
              "postalCode": "08816",
              "addressCountry": "US"
              },
              "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 551-380-0385",
              "contactType": "customer service",
              "areaServed": ["US"],
              "availableLanguage": ["English"]
              }
          })
          }}
        />
      </Head>
      <body>
     
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
        {/* <script src="bower_components/aos/dist/aos.js"></script> */}
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-2pOCDj4I22A6blf+jzJFeDnpfH74azXs6F3ICDhLScgGkp4j6hYLI6omzUjqUIvG"
          crossorigin="anonymous"
          defer
        ></script> */}
      </body>
    </Html>
  );
}
