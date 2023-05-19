

const processingName=[
    "🔰国外流量",
    "自动选择",
    "八方云"
]


const startProcessing = (groups)=>{
    for (const i in groups) {
     const  group= groups[i]
     if(processingName.includes(group.name)){
        group.url="https://www.google.com/generate_204"
        group.type="url-test"
        group.interval=14400
        groups[i]=group
     }
    }
    return groups
}
module.exports.parse = async (raw, 
    { axios, yaml, notify, console }, 
    { name, url, interval, selected }) => {
    console.log("*****************************")
    console.log(`开始处理groups-to-test ${url}`)
    console.log("*****************************")
    const obj = yaml.parse(raw);
    if(obj["proxy-groups"]){
      obj["proxy-groups"]= startProcessing(obj["proxy-groups"])
    }
    console.log("*****************************")
    console.log(`处理结束groups-to-test ${url}`)
    console.log("*****************************")
    return yaml.stringify(obj);
}
