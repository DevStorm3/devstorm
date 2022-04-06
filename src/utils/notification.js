import { notification } from "antd"
export const successNotify = (message)=>{
    notification.success({
        message,
        placement: 'bottomLeft',
        duration:'2'
    })
}

export const warnNotify = (message)=>{
    notification.warn({
        message,
        placement: 'bottomLeft',
        duration:'2'
    })
}

export const errorNotify = (message)=>{
    notification.error({
        message,
        placement: 'bottomRight' 
    })
}