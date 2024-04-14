import { lessions, units } from '@/db/schema'
import { UnitBanner } from './unit-banner'
import { LessonButton } from './lesson-button'

type Props = {
  id: number
  order: number
  title: string
  description: string
  lessions: (typeof lessions.$inferSelect & { completed: boolean })[]
  activeLession:
    | (typeof lessions.$inferSelect & {
        unit: typeof units.$inferSelect
      })
    | undefined
  activeLessionPercentage: number
}

export const Unit = ({
  id,
  order,
  title,
  description,
  lessions,
  activeLession,
  activeLessionPercentage,
}: Props) => {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="flex items-center flex-col relative">
        {lessions.map((lession, index) => {
          const isCurrent = lession.id === activeLession?.id
          const isLocked = !lession.completed && !isCurrent

          return (
            <LessonButton
              key={lession.id}
              id={lession.id}
              index={index}
              totalCount={lessions.length - 1}
              current={isCurrent}
              locked={isLocked}
              percentage={activeLessionPercentage}
            />
          )
        })}
      </div>
    </>
  )
}
