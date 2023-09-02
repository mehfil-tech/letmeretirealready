import Nav from '@components/Nav'
import '@styles/globals.css'

export const metadata = {
  title: 'LMRA',
  description: 'Get retired',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="main" />
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}
