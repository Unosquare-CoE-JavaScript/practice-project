export interface RequestConfig{
    // headers:HeadersInit | undefined;
    url:string;
    jwt:string | undefined;
    method:string;
    body:any | undefined ;
}