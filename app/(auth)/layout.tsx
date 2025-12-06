import PageIllustration from '@/components/page-illustration'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {  
  return (
    <main className="grow" style={{backgroundColor: "white"}}>

      <PageIllustration />

      {children}

    </main>
  )
}
