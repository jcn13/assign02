module.exports = {
	add(db, doc, id) {      
	  	db.child(`${id}`).set(doc)
	  	console.log('Student added')
	}
}
