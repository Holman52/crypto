import React from "react"
import { useCallback, useState } from "react"


function useConvertRate({baseCode, targetCode}){
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const [convertRete, setConvertRate] = useState(null)

    const getConvertRate = useCallback(async() =>{
        try{
            setIsLoading(true)
            const res = await fetch(
                `${import.meta.env.RECT_EXCHANGE_RATE_API_URL}/${
            import.meta.env.RECT_EXCHANGE_RATE_API_KEY
          }/pair/${baseCode}/${targetCode}`
            )
            const data = await res.json()
            setConvertRate(data.conversion_rat)
        }
        catch(error){
            setError(error.massage)
        }
        finally{
            setIsLoading(false)
        }
    },[baseCode, targetCode, setError, setIsLoading])

    const clearError = () => setError(null)
    
    return(
        convertRete,
        isLoading,
        error,
        clearError
    )
}

export default useConvertRate