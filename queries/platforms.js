const db = require("../db/dbConfig.js")


//Index
const getAllPlatforms = async () => {
    try {
        const allPlatforms = await db.any(`SELECT * FROM platforms`);
        return allPlatforms
    } catch (error) {
        return error;
    }
};

//Show
const getOnePlatform = async (id) => {
    try {
        const onePlatform = await db.one(`SELECT * FROM platforms WHERE platforms.id = $1`, id)
        return onePlatform
    } catch (error) {
        return error
    }
}



module.exports = {getAllPlatforms, getOnePlatform}