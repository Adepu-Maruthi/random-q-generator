import React, { useState } from "react";
import axios from "axios";


const QuoteGenerate = () => {

    const [quote, setQuote] = useState('“Rare as is true love, true friendship is rarer"')
    const [author, setAuthor] = useState('Jean de La Fontaine ')
    const [type, setType] = useState('Friendship')

    const copyText = () => {
        navigator.clipboard.writeText(quote);
    }
    const new_quote = () => {
        axios.get('https://api.quotable.io/random')
            .then(response => {
                setQuote(`"${response.data.content}"`)
                setAuthor(response.data.author)
                setType(response.data.tags)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="bg-amber-200">

            <div className=" ">
                <div className="">
                    <h1 className="font-bold text-center text-2xl flex justify-center align-center pt-8 font-serif">Random Quote Generator</h1>
                </div>
                <div className=" flex justify-center content-center mt-12">
                    <div className="h-80 w-4/5 bg-slate-100 rounded-md shadow-2xl">
                        <h2 className="p-10 text-center font-mono">{quote}</h2>
                        <div className="flex items-end content-around justify-around ">
                            <cite className="pt-10"> ~{author}</cite>
                            <em className=" ">{type}</em>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn">
                <button onClick={new_quote} className="border-2 shadow-md border-solid ml-2 border-black hover:bg-slate-100 rounded p-1">New Quote</button>
                <button onClick={copyText} className="border-2 shadow-md border-solid ml-2 border-black hover:bg-slate-100 rounded p-1 px-8">Copy</button>
            </div>
        </div>
    )
}
export default QuoteGenerate