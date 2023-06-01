
const companyProxies=[
    {
        name: "wjProxies",
        type: "socks5",
        server: "127.0.0.1",
        port: 9999
    },
]

const proxiesGroups=[
    {
        name: "wj",
        type: "select",
        proxies:["wjProxies"]
    },
]




const addCompanyProxies =(obj)=> {
     if(!obj.proxies){
        return
    }
    obj.proxies=[...obj.proxies,...companyProxies]
    obj["proxy-groups"]=[...obj["proxy-groups"],...proxiesGroups]
}

const getWjrules=(obj)=>{
    return `IP-CIDR,192.168.1.${obj}/24,wj,no-resolve`;
}


const rulesConf=[
    `IP-CIDR,192.168.1.8/24,wj,no-resolve`,
    // getWjrules(71),
    // getWjrules(74),
    // getWjrules(70),
    // getWjrules(92),
    // getWjrules(95),
    // getWjrules(200),
    // getWjrules(227),
]


const rulesParagraph =(obj)=>{
    if(!obj.rules){
        obj.rules=[]
    }
    const rules=new Set([...rulesConf,...obj.rules])
    obj.rules=[...rules]
}

module.exports.parse = async (raw, 
    { axios, yaml, notify, console }, 
    { name, url, interval, selected }) => {
    console.log("*****************************")
    console.log(`开始处理公司配置本地代理 ${url}`)
    console.log("*****************************")
    const obj = yaml.parse(raw);
    addCompanyProxies(obj)
    rulesParagraph(obj)
    console.log("*****************************")
    console.log(`开始处理公司配置本地代理 ${url}`)
    console.log("*****************************")
    return yaml.stringify(obj);
}
