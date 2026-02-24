import type { Metadata } from 'next'
import { getExperience } from '@/lib/experience'
import { getProjects } from '@/lib/projects'
import ExperienceItem from '@/components/experience/ExperienceItem'
import ProjectCard from '@/components/experience/ProjectCard'
import { Separator } from '@/components/ui/separator'

export const metadata: Metadata = {
  title: 'Experience',
}

export default function ExperiencePage() {
  const jobs = getExperience()
  const projects = getProjects()

  return (
    <div className="px-6 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>

      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-6">Work</h2>
        <div className="space-y-8">
          {jobs.map((item, i) => (
            <div key={`${item.company}-${item.startDate}`}>
              <ExperienceItem item={item} />
              {i < jobs.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}
        </div>
      </section>

      <Separator className="mb-12" />

      <section>
        <h2 className="text-lg font-semibold mb-6">Projects</h2>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div key={project.name}>
              <ProjectCard project={project} />
              {i < projects.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
