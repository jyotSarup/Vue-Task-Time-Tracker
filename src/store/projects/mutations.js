import {MUTATE_PROJECTS} from "../../constants";

export default {
    [MUTATE_PROJECTS]: (state, projects) => {
        state.projects = projects ;
    }
}
