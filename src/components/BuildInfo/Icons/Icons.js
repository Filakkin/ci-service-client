import { ReactComponent as Done } from './done_24.svg';
import { ReactComponent as InProgress } from './clock_24.svg';
import { ReactComponent as Error } from './fail_24.svg';


const _Icons = {
    done: Done,
    inProgress: InProgress,
    error: Error
}

const Icons = {
    ..._Icons,
    Type: {
        DONE: 'done',
        IN_PROGRESS: 'inProgress',
        ERROR: 'error'
    }
}


export default Icons;