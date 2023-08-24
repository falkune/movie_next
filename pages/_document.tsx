import Document, { Html, Head, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Ajouter ici les balises <meta>, <link>, <style>, <script> ou autres */}
          <link rel="stylesheet" href="css/style.css" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
          <link rel="icon" href="imgs/clap.ico" type="image/x-icon" />
        </Head>
        <body>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

