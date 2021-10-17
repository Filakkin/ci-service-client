import { ReactComponent as Cog } from './12_cog.svg';
import { ReactComponent as Play } from './12_play.svg';
import { ReactComponent as Rebuild } from './12_rebuild.svg';


const _Icons = {
    cog: Cog,
    play: Play,
    rebuild: Rebuild
}

const Icons = {
    ..._Icons,
    Type: {
        COG: 'cog',
        PLAY: 'play',
        REBUILD: 'rebuild'
    }
}


export default Icons;