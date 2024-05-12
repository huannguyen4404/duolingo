import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries'
import { redirect } from 'next/navigation'
import { Quiz } from './quiz'

const LessonPage = async () => {
  const lessionData = await getLesson()
  const userProgressData = await getUserProgress()
  const userSubscriptionData = await getUserSubscription()

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessionData,
    userProgressData,
    userSubscriptionData,
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
      userSubscription={userSubscription}
    />
  )
}

export default LessonPage
