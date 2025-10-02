// app/layout.tsx
import './globals.css'
import Provider from './Providers/Provider'

export const metadata = {
  title: 'Catálogo - DummyJSON',
  description: 'Catálogo de productos usando DummyJSON API',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
          <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow p-4">
              <div className="max-w-6xl mx-auto"> <h1 className="text-xl font-bold">Catálogo</h1> </div>
            </header>
            <main className="mx-auto p-4">
              <Provider>{children}</Provider>
            </main>
          </div>
      </body>
    </html>
  )
}