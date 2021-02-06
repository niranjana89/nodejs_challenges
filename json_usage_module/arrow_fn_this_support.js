//without arrow function the below code will print this.name as Neil
const eventN = {
  name: 'Neil',
  printGuestList: function () {
    console.log('This event is organized by ', this.name)
  },
}

eventN.printGuestList()

//with arrow function - the below code will print this.name as undefined
const eventNArrow = {
  name: 'Neil',
  printGuestList: () => {
    console.log('This event is organized by ', this.name)
  },
}

eventNArrow.printGuestList()


//es6
const eventEs6 = {
  name: 'Neil',
  printGuestList() {
    console.log('This event is organized by ', this.name)
  },
}

eventEs6.printGuestList()




//this will not work.
const bEvent = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Rachel', 'Joseph'],
  printGuestList() {
    console.log('This is a ', this.name)
    this.guestList.forEach(function (guest) {
      console.log(guest, ' is attending ', this.name)
    })
  },
}

bEvent.printGuestList()


//this will work - assign this to that
const bEventThat = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Rachel', 'Joseph'],
  printGuestList() {
    const that = this
    console.log('This is a ', this.name)
    this.guestList.forEach(function (guest) {
      console.log(guest, ' is attending ', that.name)
    })
  },
}

bEventThat.printGuestList()


// with arrow and forEach
const bEventArrow = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Rachel', 'Joseph'],
  printGuestList() {
    console.log('This is a ', this.name)
    this.guestList.forEach((guest) => {
      console.log(guest, ' is attending ', this.name)
    })
  },
}

bEventArrow.printGuestList()



