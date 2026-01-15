import { Navbar } from '@/components/layout/navbar'


function CommonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar/>
      {children}
      </div>
  )
}

export default CommonLayout