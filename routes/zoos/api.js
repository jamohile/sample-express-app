const {getDB} = require("../../utils/db");

exports.createZoo = async (name) => {
    await getDB().execute(`
        INSERT INTO 
            Zoos
            (name, dateCreated)
        VALUES 
            (?, ?)
    `, [name, new Date()]);
    return true;
}

exports.getZoos = async () => {
    const [rows] = await getDB().execute(`
        SELECT * FROM Zoos`
    );
    return rows;
}