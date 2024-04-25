import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"





export default function Page() {
  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <Card starless={false} />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Characters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <Card starless={true} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}




