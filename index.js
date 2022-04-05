// console.log("Hey, this works!")

//Use a class and a constructor function to create our timer object
class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        // //get the value of the "this" keyword
        // console.log(this)

        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if (callbacks) {
            this.onStart = callbacks.onStart
            this.onTick  = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        //add event listener for startButton every time the button is clicked
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)
    }


    //create methods to start (and pause) the timer
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining)
        }
        //have the timer count down with an interval of a second
        this.tick()
        this.timerCount = setInterval(this.tick, 20)

    }

    pause = () => {
        //stop timer immediately when the pause button is clicked
        clearInterval(this.timerCount)
        console.log("Timer is now paused")
    }

    // add countdown method
    tick = () => {
        
        console.log("tick")
        // const timeRemaining = this.timeRemaining
        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete()
            }
        } else {
            //get the value of the timer duration
            this.timeRemaining = this.timeRemaining - 0.02
            if (this.onTick) {
                this.onTick(this.timeRemaining)
            }
        }

    }

    //set getter and setter methods to retrieve a value from the class without explicitly calling it
    get timeRemaining() {
        return parseFloat(this.durationInput.value)
        
    }

    set  timeRemaining(time) {
        this.durationInput.value = time.toFixed(2)
    }

}

//create variables for each of the elements
const durationInput = document.getElementById('timer-duration')
const startButton = document.getElementById('start')
const pauseButton = document.getElementById('pause')
const circle = document.getElementById('circle')

//get the dynamic value of the radius & stroke-dasharray
const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)


let duration;
//create a new instance of the timer
const timer = new Timer(durationInput, startButton, pauseButton, {
    //add callback functions to notify the user about timer actions
    onStart(totalDuration) {
        duration = totalDuration
    },
    onTick(timeRemaining) {
        //make animation work every time a timer is ticked
        // console.log('1.', circle.getAttribute('stroke-dashoffset'))
        circle.setAttribute('stroke-dashoffset', 
            perimeter * timeRemaining / duration - perimeter
        )
    },
    onComplete () {
        //add a way to play a sound when timer is complete
        let mySound = new Audio('ding.mp3')
        mySound.play()

    }
})
