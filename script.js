let [hours, minutes, seconds] = [0, 0, 0]; //Used to store data (like time values).
let display = document.getElementById("display");
let timer = null;

//Display the Time
function updateDisplay()
{
    let h = String(hours).padStart(2,'0');
    let m = String(minutes).padStart(2,'0');
    let s =String(seconds).padStart(2,'0');

    document.getElementById("display").textContent=`${h}:${m}:${s}`;


}
//Run the Stopwatch
function Stopwatch()
{
    seconds++;
    if(seconds==60)
    {
        seconds=0;

        minutes++;
        if(minutes==60)
        {
            minutes=0;
            hours++
        }
    }
    updateDisplay();
}

//Handle Start, Pause, Reset, and Lap
//start

document.getElementById("start").addEventListener("click",()=>     //When the Start button is clicked, run this code.”
//This finds the HTML element with id="start".That’s your Start button on the page.
{                                                                    
    if(!timer)                               //if (!timer)
                                            //This checks if timer is not already running.

                                          //!timer means:
                                         // "If timer is empty or null" → so we avoid starting it again.
    {
        timer = setInterval(Stopwatch,1000);         //This starts the stopwatch timer.
    }                                                //setInterval(...) runs the stopwatch() function every 1000 milliseconds (1 second).
}

);

//pause
//This finds the HTML button with id="pause".
document.getElementById("pause").addEventListener("click",()=>   //When the Pause button is clicked, run the code inside.”
{

    clearInterval(timer);            //Stop calling the stopwatch() function every second."
    timer=null;                      //This clears the timer variable by setting it to null.
}

);

//Reset
//Finds the Reset button (id="reset").
document.getElementById("reset").addEventListener("click", () =>    //When the Reset button is clicked, run this function.”
{
    clearInterval(timer);        //This stops the stopwatch.
    timer=null;                  //This clears the timer variable.
    [hours,minutes,seconds]=[0,0,0];          //This resets the time to 0 hours, 0 minutes, 0 seconds.
    updateDisplay();                         //This updates the timer display on the screen.
                                             //This clears all lap records shown on the screen.
    document.getElementById("laps").innerHTML="";

});
//When you click the Reset button, stop the stopwatch, reset time to 0, update the display, and erase all lap records."

//Lap
//This line finds the Lap button on the page (id="lap")
document.getElementById("lap").addEventListener("click",()=>
{
    if(timer)                //This checks if the stopwatch is currently running.
    {
        const lapTime = document.getElementById("display").textContent;         //This grabs the current time from the stopwatch display (for example: "00:01:15").

                                                                              //It stores that time in a variable called lapTime.
        const li = document.createElement("li");            //This creates a new list item element (<li>) in memory.

        li.textContent = `Lap:${lapTime}`;                   //This sets the text inside the <li> element

        document.getElementById("laps").appendChild(li);         //This adds the <li> element to the list in your HTML (<ul id="laps">).
    }
//When you click the Lap button, if the stopwatch is running, get the current time, create a new line with that time, and show it as a lap below the stopwatch."

});






