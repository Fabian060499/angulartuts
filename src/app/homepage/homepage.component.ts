import { publishFacade } from '@angular/compiler';
import { Component, AfterViewInit } from '@angular/core';
let myIndex = 0;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements AfterViewInit {
// Automatic Slideshow - change image every 4 seconds

constructor(){
  // this.carousel();
  
}
public ngAfterViewInit(): void {
  let modal = document.getElementById('ticketModal');
  window.onclick = function(event) {
  if (event.target == modal) {
    modal!.style.display = "none";
  }
}
}
public carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides") as any;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(this.carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
public myFunction() {
  var x = document.getElementById("navDemo") as any;
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it

}
