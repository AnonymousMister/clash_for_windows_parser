
const nameserverConf=[
    "192.168.1.8"
]

const ndsParagraph =(obj)=> {
     if(!obj.dns){
        return
    }
    if(!obj.dns["nameserver"]){
        obj.dns["nameserver"]=[]
    }
    const nameserver=new Set([...obj.dns["nameserver"],...nameserverConf])
    obj.dns["nameserver"]=[...nameserver]
}

const rulesConf=[
    "DOMAIN-KEYWORD,winjoinit,DIRECT",
    "DOMAIN-SUFFIX,test-k3s.wj,DIRECT",
    "DOMAIN-SUFFIX,jsd.cdn.zzko.cn,DIRECT"
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
    console.log(`开始处理公司配置 ${url}`)
    console.log("*****************************")
    const obj = yaml.parse(raw);
    ndsParagraph(obj)
    rulesParagraph(obj)
    console.log("*****************************")
    console.log(`开始处理公司配置 ${url}`)
    console.log("*****************************")
    return yaml.stringify(obj);
}
