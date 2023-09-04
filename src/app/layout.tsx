import Nav from '@components/Nav'
import RootStore from '@store'
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
        <RootStore>
          <main className="app flex-column">
            <Nav />
            {children}
          </main>
        </RootStore>
      </body>
    </html>
  )
}
