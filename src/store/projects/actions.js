import {
    SET_PROJECT_STATUS,
    MUTATE_PROJECTS
} from "src/constants";

export default {
    [SET_PROJECT_STATUS]: async ({commit}, projects) => {
        await commit(MUTATE_PROJECTS,projects)
    }
 }

