'use client'

import { challengeOptions, challenges } from '@/db/schema'
import { useState } from 'react'
import { Header } from './header'

type Props = {
  initialPercentage: number
  initialLessonId: number
  initialHearts: number
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean
    challengeOptions: (typeof challengeOptions.$inferSelect)[]
  })[]
  userSubscription: any
}

export const Quiz = ({
  initialPercentage,
  initialLessonId,
  initialHearts,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialHearts)
  const [percentage, setPercentage] = useState(initialPercentage)

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.active}
      />
    </>
  )
}
