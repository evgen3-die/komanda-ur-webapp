import fetcher from '@/utils/fetcher'
import { API_ENDPOINT } from '@/constants'

const URL = `${API_ENDPOINT}/auth/agreements`

export default async function (data) {
  await fetcher.post(URL, data)
}
