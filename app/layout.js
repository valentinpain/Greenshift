import './globals.css'
import Layout from "@/components/Layout";


export const metadata = {
  title: 'GreenShift',
  description: '',
  icons : {
            icon : "/images/green_shift_logo.png",
        },
}

export default function RootLayout({ children }) {

  return (
    <html lang="fr" className="scroll-smooth">
      <body>
            <Layout>
                {children}
            </Layout>
      </body>
    </html>
  )
}
