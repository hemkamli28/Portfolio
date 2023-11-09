import Script from 'next/script'
import Head from 'next/head'
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Toaster } from 'react-hot-toast';


export const metadata = {
  title: 'Hem Kamli',
  description: 'Hem Kamli Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </Head>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  )
}
