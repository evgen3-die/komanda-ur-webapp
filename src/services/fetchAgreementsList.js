import fetcher from '@/utils/fetcher'
import { API_ENDPOINT } from '@/constants'

const URL = `${API_ENDPOINT}/auth/agreements`

export default async function () {
  const { data } = await fetcher.get(URL)
  return data
}
