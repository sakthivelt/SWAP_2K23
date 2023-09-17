import '../styles/globals.css';
import Head from './head';

const RootLayout = ({ children }) => (
  <html lang="en">
    <Head/>
    <head>
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
