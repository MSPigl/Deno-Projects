import { serve } from "https://deno.land/std@0.53.0/http/server.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";
const { args } = Deno;

const parsedArgs = parse(args);
const listenOptions: Deno.ListenOptions = { port: +parsedArgs['port'] || 8000 };
const server = serve(listenOptions);
console.log(`Server listening at location: http://localhost:${listenOptions.port}`);

for await (const req of server) {
    if (req.url !== '/favicon.ico') {
        console.log(`URL before parsing: ${req.url}`);
        const parsedUrl: Array<string> = req.url.split('?');
        const uri = parsedUrl[0];
        console.log(`URI: ${uri}`);

        if (parsedUrl.length === 2) {
            const queryString = parsedUrl[1];
            console.log(`Query string: ${queryString}`);

            const params: Array<string> = queryString.replace(/\?/, '').split('&');

            const queryParams: { [key: string]: string | Array<string> } = {};
            for (let param of params) {
                const paramValue: Array<string> = param.split('=');

                if (paramValue.length === 2) {
                    if (queryParams[paramValue[0]]) {
                        if (typeof queryParams[paramValue[0]] === 'object') {
                            (queryParams[paramValue[0]] as Array<string>).push(paramValue[1]);
                        } else {
                            queryParams[paramValue[0]] = [(queryParams[paramValue[0]] as string), paramValue[1]];
                        }
                    } else {
                        queryParams[paramValue[0]] = paramValue[1];
                    }
                }
            }

            console.log(queryParams);
        }
    }

    req.respond({ status: 200, body: "Hello World\n" });
}