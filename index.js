// console.log("Hey, this works!")

//Use a class and a constructor function to create our timer object
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        //add event listener for startButton every time the button is clicked
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }

    //create methods to start and pause the timer
    start() {
        console.log("Timer starts now")
    }

    pause() {
        console.log("Timer is now paused")
    }
}

//create variables for each of the elements
const durationInput = document.getElementById('timer-count')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')

//create a new instance of the timer
const timer = new Timer(durationInput, startButton, pauseButton)