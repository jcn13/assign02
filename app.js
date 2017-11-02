const firebase = require('firebase')
const readline = require('readline')

const del = require('./delete')
const read = require('./read')
const update = require('./update')
const create = require('./create')

firebase.initializeApp({
	databaseURL: ''
})

const ref = firebase.database().ref('class')

const joao = {
	name: 'Joao',
	course: 'WMDD',
	city: 'Vancouver'
}
const john = {
 	name: 'John',
	course: 'WMDD4935',
	city: 'Richmond'
}

rl = readline.createInterface(process.stdin, process.stdout)

rl.setPrompt('Please select your function\n1- Create\n2- Read\n3- Update\n4- Delete\n5- Exit > ')
rl.prompt()

rl.on('line', function(line) {
	switch(line.toString().trim()) {
    	case '1':{
			create.add(ref, joao, 0)
			break
		}
		case '2':{			
			read.getDB(ref)
			break
		}
		case '3':{
			update.edit(ref, john, 0)
			break
		}
		case '4':{
			del.remove(ref, 0)
			break
		}
		case '5':{
			rl.close()
			break
		}
	}
  	rl.prompt();
}).on('close', function() {
	console.log('The end')
	process.exit(0)
})

