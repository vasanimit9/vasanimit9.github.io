import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      <div className="relative w-full h-52 sm:h-64 mb-8 rounded-2xl overflow-hidden">
        <Image
          src="/avatar.jpg"
          alt="Mit Vasani"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-1">Mit Vasani</h1>
      <p className="text-sm text-muted-foreground mb-5">Software engineer · anime fan · avid reader</p>

      <div className="space-y-1 text-muted-foreground mb-8">
        <p><span aria-hidden="true">🧑‍💻</span> Building things for the web</p>
        <p><span aria-hidden="true">🧙‍♂️</span> Hooked on anime and good stories</p>
        <p><span aria-hidden="true">📚</span> Reading one book too many</p>
        <p><span aria-hidden="true">✍️</span> Writing down what I think</p>
      </div>

      <Button asChild variant="outline" size="sm">
        <a href="https://github.com/vasanimit9" target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
      </Button>
    </div>
  )
}
