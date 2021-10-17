import { customAlphabet } from 'nanoid';

import { names } from '../data/names';
import { messageText } from '../data/commitMessages';


const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

let initialBuild = getRandomNumber(10, 3000);
let buildCount = initialBuild;

export const asyncFetchBuilds = async (limit) => {
    return Array.from({length: limit}).map(_ => generateOldBuild()).filter(info => info !== null);
}

export const generateNewBuild = (hash) => {
    return generateBuild(++initialBuild, hash);
}

const generateOldBuild = () => {
    if (buildCount === 0) {
        return null;
    }
    return generateBuild(buildCount--)
}

const generateBuild = (buildNumber, hash) => {
    return {
        commitInfo: {
            message: messageText[getRandomNumber(0, messageText.length - 1)],
            author: names[getRandomNumber(0, names.length - 1)],
            branch: 'main',
            hash: hash || customAlphabet("abcdef0123456789", 8)(),
        },
        buildInfo: {
            number: buildNumber,
            status: getRandomNumber(0, 5) > 0 ? 'done' : 'error',
            startDate: '10 окт 2021, 22:00',
            duration: '15 мин'
        }
    }
}
