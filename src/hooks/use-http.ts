import { OutgoingHttpHeader } from 'http'
import { useState, useCallback } from 'react'

type SendRequestConfig = {
  url: string
  method?: string
  headers?: OutgoingHttpHeader | any
  body?: any
}

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const sendRequest = useCallback(async (requestConfig: SendRequestConfig, applyData : (data: any) => void) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      })

      if (!response.ok) {
        throw new Error('Request failed!')
      }

      const data = await response.json()
      applyData(data)
    } catch (err) {
      setError((err as Error).message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])

  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp
