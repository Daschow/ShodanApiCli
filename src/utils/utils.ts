import fs from 'fs';
import client from 'shodan-client';

const writeInFile = (result, fileName) => {
    fs.writeFileSync(`./result/${fileName}`,JSON.stringify(result));
}

export const fetchFromShodan = async (res, port, fileName) => {
    let result: any;
    try {
        result = await client.search(`port:${port}`, process.env.API_KEY);
    } catch (error) {
        // tslint:disable-next-line:no-console
        console.error(error);
    }
    writeInFile(result.matches, fileName);
    res.send(result);
}
