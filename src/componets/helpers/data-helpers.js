export const datetoUnix=(date)=>{
return Math.floor(date.getTime()/1000);
}

export const Unixtodate=(unix)=>{
    return new Date(unix*1000).toLocaleDateString()
    }

export const createDate =(date,days,weeks,months,years)=>{
    let newDate= new Date(date);
    newDate.setDate(newDate+days+7*weeks)
    newDate.setMonth(newDate+months)
    newDate.setFullYear(newDate+years)
}