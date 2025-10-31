import './globals.css'

export const metadata = {
  title: 'Detroit Swift DevRel Hub',
  description: 'Learn Swift, build apps, join the community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
