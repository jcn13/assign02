module.exports = {	
	getDB(db){ 
		db.once('value', data => {	
			console.log(data.val()) 
		})	
	}   
}