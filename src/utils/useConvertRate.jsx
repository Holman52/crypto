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
                `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_API_KEY}/pair/${baseCode}/${targetCode}`
            )
            const data = await res.json()
            setConvertRate(data.conversion_rate)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setIsLoading(false)
        }
    },[baseCode, targetCode, setError, setIsLoading])

    const clearError = () => setError(null)
    
    useEffect(()=>{
        getConvertRate()
    }, [getConvertRate])

    console.log(convertRate)

    return(
        {convertRate,
        isLoading,
        error,
        clearError}
    )
    
}

export default useConvertRate