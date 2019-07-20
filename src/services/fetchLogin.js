import fetcher from '@/utils/fetcher'
import { API_ENDPOINT } from '@/constants'

const URL = `${API_ENDPOINT}/login`

export default async function (email, password) {
  const response = await fetcher.get(URL, {
    params: { email, password }
  })

  console.log(response)
}
