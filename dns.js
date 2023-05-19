
const dth=[
    "https://dns.adguard-dns.com/dns-query",
    "https://36fed11e.d.adguard-dns.com/dns-query",
]

const dnsObject={
    "default-nameserver":[
        "94.140.14.49",
        "8.8.8.8"
    ],
    "nameserver":[
        "192.168.1.8",
        ...dth
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
