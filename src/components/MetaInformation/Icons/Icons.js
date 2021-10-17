import { ReactComponent as Calendar } from './16_calendar.svg';
import { ReactComponent as Commit } from './16_code-commit.svg';
import { ReactComponent as Stopwatch } from './16_stopwatch.svg';
import { ReactComponent as User } from './16_user.svg';


const _Icons = {
    calendar: Calendar,
    commit: Commit,
    stopwatch: Stopwatch,
    user: User
}

const Icons = {
    ..._Icons,
    Type: {
        CALENDAR: 'calendar',
        COMMIT: 'commit',
        STOPWATCH: 'stopwatch',
        USER: 'user'
    }
}


export default Icons;