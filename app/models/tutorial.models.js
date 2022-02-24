const sql = require("./db.js");
const Video = function(video){
    this.title = video.title;
    this.description = video.description;
    this.published = video.published
};
//Create the create function in crud
Video.create = (newVideo, result)=>{
    sql.query("INSERT INTO videos SET ?", newVideo, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("video created: ", {id: res.insertId, ...newVideo})
        result(null, {id: res.insertId, ...newVideo})
    });
}
//find tutorial by id
Video.findById=(id, result)=>{
    sql.query(`SELECT * FROM videos WHERE id = ${id}`, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if(res.length){
            console.log("found video: ", res[0])
            result(null, res[0]);
            return;
        }
        result({kind: "not found"}, null);
    });
};

module.exports = Video;