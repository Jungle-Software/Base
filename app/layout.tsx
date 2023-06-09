import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "../components/navbar";
import { AuthContextProvider } from "../context/AuthContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
      </head>
      <body>
        <AuthContextProvider>
          <Navbar>
            {children}
          </Navbar>
        </AuthContextProvider>
      </body>
    </html>
  )
}
