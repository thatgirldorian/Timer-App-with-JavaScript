// console.log("Hey, this works!")

//Use a class and a constructor function to create our timer object
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        // //get the value of the "this" keyword
        // console.log(this)

        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        //add event listener for startButton every time the button is clicked
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }


    //create methods to start and pause the timer
    start = () => {
        //have the timer count down with an interval of a second
        this.tick()
        this.timerCount = setInterval(this.tick, 1000)

    }

    pause = () => {
        //stop timer immediately when the pause button is clicked
        clearInterval(this.timerCount)
        console.log("Timer is now paused")
    }

    // add countdown method
    tick = () => {
        console.log("tick")
        const timeRemaining = parseFloat(this.durationInput.value)
    //get the value of the timer duration
    }

}

//create variables for each of the elements
const durationInput = document.getElementById('timer-duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')

//create a new instance of the timer
const timer = new Timer(durationInput, startButton, pauseButton)
//make timer start when app page is refreshed
// timer.start()