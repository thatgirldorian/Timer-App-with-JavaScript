// console.log("Hey, this works!")

//Use a class and a constructor function to create our timer object
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton

        //add event listener for startButton every time the button is clicked
        this.startButton.addEventListener('click', this.start)
    }

    //create methods to start the timer
    start() {
        console.log("Timer starts now")
    }
}