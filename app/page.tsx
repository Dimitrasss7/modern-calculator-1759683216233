'use client'
import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [history, setHistory] = useState<string[]>([])

  const handleNumber = (num: string) => {
    setDisplay(prev => prev === '0' ? num : prev + num)
  }

  const calculate = () => {
    try {
      const result = eval(display)
      setHistory(prev => [display + ' = ' + result, ...prev])
      setDisplay(result.toString())
    } catch {
      setDisplay('Error')
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 text-right text-3xl">{display}</div>
        <div className="grid grid-cols-4 gap-2">
          {['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+'].map(btn => (
            <button key={btn} onClick={() => btn === '=' ? calculate() : handleNumber(btn)}
              className="bg-blue-500 text-white p-4 rounded">{btn}</button>
          ))}
        </div>
      </div>
    </main>
  )
}