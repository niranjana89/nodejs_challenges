

//use appendFileSync to append the contents to the file

const note = require('./notes.js')
const yargs = require('yargs')

console.log(yargs.argv)

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'add',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('adding a note')
        console.log('title '+ argv.title)
    }
})


yargs.command({
    command:'remove',
    describe:'remove',
    handler:function(){
        console.log('removing a note')
    }
})

yargs.parse();

note.addNote('notes.json')