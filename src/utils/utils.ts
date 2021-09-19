import fs from 'fs';
import client from 'shodan-client';
import dotenv from 'dotenv';
const privateEnv = dotenv.config().parsed;

export const writeInFile = (result, fileName) => {
    fs.writeFileSync(`./result/${fileName}`,JSON.stringify(result));
}

export const fetchFromShodan = async (res, port, fileName) => {
    let result;
    try {
        result = await client.search(`port:${port}`, privateEnv.API_KEY);
    } catch (error) {
        console.error(error);
    }
    writeInFile(result.matches, fileName);
    res.send(result);
}
