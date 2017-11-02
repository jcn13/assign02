const read = require('./read')
module.exports ={
	edit(db, doc, id){        
		db.child(id).update(doc)
		console.log('Student updated')
		read.getDB(db)	  
	}	
}