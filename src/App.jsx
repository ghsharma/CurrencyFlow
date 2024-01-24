
import { InputBox } from './components'
import { useState } from 'react'
import useCurrencyinfo from './hooks/useCurrencyInfo'
import './App.css'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyinfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>

      <div
        className="p-0 w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div>
          <h1 className='text-2xl font-bold text-white shadow-md animate-pulse transition-all duration-10'>YOUR REALTIME</h1>
          <h1 className='text-8xl font-bold text-white shadow-md'>CURRENCY FLOW</h1>
        </div>
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black text-white px-2 py-0.5"

                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable

                />
              </div>
              <button type="submit" className="w-full bg-black text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to inr {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>

        <div>
          <h1 className='text-l font-bold text-white shadow-md'> by : <a href="https://github.com/ghsharma" target="_blank" rel="noopener noreferrer" className="hover:text-Red transition-colors duration-300">GH_SHARMA</a> with ❤</h1>
        </div>
      </div>
    </>
  );
}

export default App
