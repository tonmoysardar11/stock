import React from 'react'
import Card from './Card'

const Details = () => {
    const item={
        "country": "US",
        "currency": "USD",
        "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
        "ipo": "1980-12-12",
        "marketCapitalization": 1415993,
        "name": "Apple Inc",
        "phone": "14089961010",
        "shareOutstanding": 4375.47998046875,
        "ticker": "AAPL",
        "weburl": "https://www.apple.com/",
        "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
        "finnhubIndustry":"Technology"
    }

    const itemDetailsList={
        "country": "Country",
        "currency": "Currrency",
        "exchange": "Exchange)",
        "ipo": "IPO Date",
        "marketCapitalization": 'Market Size',
        "name": "Name",
        "logo": "",
        "finnhubIndustry":"Industry"
    }
  return (
    <Card>
        <div className='w-full flex justify-center items-center py-2'>
            <img src={item.logo} width={40} height={40} alt="" />
            <p>{item.name}</p>
        </div>
        <ul className='w-full h-full flex flex-col justify-between divider-y-1'>
            {Object.keys(itemDetailsList).filter((element)=>element!=='logo').map((element,index)=>{
                return <li key={index} className='w-full flex justify-between items-center'>
                    <span>{itemDetailsList[element]}</span>
                    <span>{typeof(item[element])==='number' ? item[element]>1000?` ${(item[element]/1000).toFixed(2)} B`:` ${item[element].toFixed(2)} M`:item[element]}</span>
                </li>
            })}
        </ul>


    </Card>
  )
}

export default Details
