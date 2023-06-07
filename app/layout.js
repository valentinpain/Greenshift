import './globals.css'
import Layout from "@/components/Layout";


export const metadata = {
  title: 'GreenShift',
  description: '',
}

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body>
            <Layout>
                {children}
            </Layout>
      </body>
    </html>
  )
}
