
const dth=[
    "https://dns.adguard-dns.com/dns-query",
    "https://36fed11e.d.adguard-dns.com/dns-query",
]

const dnsObject={
    "default-nameserver":[
        "223.5.5.5", 
        "119.29.29.29",
    ],
    "nameserver":[
        "https://36fed11e.d.adguard-dns.com/dns-query",
    ],
    "fallback":[...dth]
}

module.exports.parse = async (raw, 
    { axios, yaml, notify, console }, 
    { name, url, interval, selected }) => {
    console.log("*****************************")
    console.log(`开始处理dns ${url}`)
    console.log("*****************************")
    const obj = yaml.parse(raw);
    if(!obj.dns){
        obj.dns={}
    }
    Object.keys(dnsObject).forEach(key=>{
        obj.dns[key]=dnsObject[key]
    })
    console.log("*****************************")
    console.log(`处理结束dns ${url}`)
    console.log("*****************************")
    return yaml.stringify(obj);
}
