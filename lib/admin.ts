import { auth } from '@clerk/nextjs'

const adminIds = [
  'user_2f2lNvpGYQ4zCSfgv749Hizlg15', // huannguyen4404@gmail.com
  'user_2f4Rt3nx2AIxXHUc99dZiC8Jgke', // haulc.it@gmail.com
  'user_2fBNcnpl3SEdUkDxWLJsS7xqZIb', // hacongbang92@gmail.com
]

export const isAdmin = () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  return adminIds.indexOf(userId) !== -1
}
