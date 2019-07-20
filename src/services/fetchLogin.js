import fetcher from '@/utils/fetcher'
import { API_ENDPOINT } from '@/constants'

const URL = `${API_ENDPOINT}/auth/user`

export default async function (email, password) {
  const response = await fetcher.post(URL, {
    data: { email, password }
  })

  console.log(response)
}
