import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>

        {/* CONTEÚDO DO SITE */}
        {children}

        {/* BOTÕES FLUTUANTES (TODAS AS PÁGINAS) */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/clubcar.multimarcas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-pink-600 hover:bg-pink-700 rounded-full shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/clubcar.mutiimarcas/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="white" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5A3.5 3.5 0 0114 6h2v3h-2c-.5 0-1 .5-1 1v2h3l-.5 3H13v7A10 10 0 0022 12z"/>
            </svg>
          </a>

        </div>

      </body>
    </html>
  )
}