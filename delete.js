module.exports = {
	remove(db, id){	  
		db.child(id).remove()
		console.log(`Object with ${id} was removed`)	  
	}
}