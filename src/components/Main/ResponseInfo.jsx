import React, {useContext} from 'react'
import { ResponseContext } from '../../contexts/ResponseContextProvider'
import styles from "../../styles/main.module.css"


const statusMapping = {
  100: "Continue",
101: "Switching Protocols",
103: "Early Hints",
200: "OK",
201: "Created",
202: "Accepted",
203: "Non-Authoritative Information",
204: "No Content",
205: "Reset Content",
206: "Partial Content",
300: "Multiple Choices",
301: "Moved Permanently",
302: "Found",
303: "See Other",
304: "Not Modified",
307: "Temporary Redirect",
308: "Permanent Redirect",
400: "Bad Request",
401: "Unauthorized",
402: "Payment Required",
403: "Forbidden",
404: "Not Found",
405: "Method Not Allowed",
406: "Not Acceptable",
407: "Proxy Authentication Required",
408: "Request Timeout",
409: "Conflict",
410: "Gone",
411: "Length Required",
412: "Precondition Failed",
413: "Payload Too Large",
414: "URI Too Long",
415: "Unsupported Media Type",
416: "Range Not Satisfiable",
417: "Expectation Failed",
418: "I'm a teapot",
422: "Unprocessable Entity",
425: "Too Early",
426: "Upgrade Required",
428: "Precondition Required",
429: "Too Many Requests",
431: "Request Header Fields Too Large",
451: "Unavailable For Legal Reasons",
500: "Internal Server Error",
501: "Not Implemented",
502: "Bad Gateway",
503: "Service Unavailable",
504: "Gateway Timeout",
505: "HTTP Version Not Supported",
506: "Variant Also Negotiates",
507: "Insufficient Storage",
508: "Loop Detected",
510: "Not Extended",
511: "Network Authentication Required", 
}

const ResponseInfo = () => {
  const [responseInfo, _] = useContext(ResponseContext);
  const {status, duration, size} = responseInfo?.responseMetaInfo
  return (
    <div className={styles.responseInfo}>
        <span>Status: <span style={{color: `${status >= 400 ? "red" : "#10B981"}`}}>{status} {statusMapping[status]}</span></span>
        <span>Time: <span style={{color: `${status >= 400 ? "red" : "#10B981"}`}}>{duration} ms</span></span>
        <span>Size: <span style={{color: `${status >= 400 ? "red" : "#10B981"}`}}>{size} B</span></span>
    </div>
  )
}

export default ResponseInfo