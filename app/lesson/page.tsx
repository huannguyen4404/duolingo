import { getLesson, getUserProgress } from '@/db/queries'
import { redirect } from 'next/navigation'
import { Quiz } from './quiz'

const LessonPage = async () => {
  const lessionData = await getLesson()
  const userProgressData = await getUserProgress()

  const [lesson, userProgress] = await Promise.all([
    lessionData,
    userProgressData,
  ])

  if (!lesson || !userProgress) {
    return redirect('/learn')
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lesson.challenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={undefined}
    />
  )
}

export default LessonPage
