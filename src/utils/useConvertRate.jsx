import React, { useEffect } from "react"
import { useCallback, useState } from "react"


function useConvertRate({baseCode, targetCode}){
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)
    const [convertRate, setConvertRate] = useState(null)

    const getConvertRate = useCallback(async() =>{
        try{
            setIsLoading(true)
            const res = await fetch(
                `${import.meta.env.VITE_EXCHANGE_RATE_API_URL}/${
            import.meta.env.VITE_EXCHANGE_RATE_API_KEY
          }/pair/${baseCode}/${targetCode}`
            )
            console.log(res)
            const data = await res.json()
            console.log(data)
            setConvertRate(data.conversion_rate)
            console.log(data.conversion_rate)
        }
        catch(error){
            setError(error.message)
            console.log(error.message)
        }
        finally{
            setIsLoading(false)
        }
    },[baseCode, targetCode, setError, setIsLoading])

    const clearError = () => setError(null)
    
    useEffect(()=>{
        getConvertRate()
    }, [getConvertRate])

    return(
        convertRate,
        isLoading,
        error,
        clearError
    )
}

export default useConvertRate