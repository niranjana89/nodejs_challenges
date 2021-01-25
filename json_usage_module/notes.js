const fs = require('fs')

module.exports={  
getnote : function getNotes(){
    return 'This is a note'
},
loadNote: function loadNotes(file) {
    try{
        const buffer = fs.readFileSync(file)
        const bufferStr = buffer.toString()
        const parsed = JSON.parse(bufferStr)
        return parsed
    }catch(e){
        return []
    }
    
},
addNote: function addNotes(file){
   const dataStr =this.loadNote(file)
   
   console.log(dataStr)
   let note = {
       title:'noteType',
       Name: 'sample'
   }

   dataStr.push(note)
  

   this.saveNote(dataStr)
},


saveNote: function saveNotes(result){
    console.log(result)
    fs.writeFileSync('notes.json',JSON.stringify(result, null, 2))
}



}