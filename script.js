function greeting() {
  const c = document.getElementById('greet');
  const d = c.value.trim();
  
  if (d === ""){
    alert("pls enter greet");}
   else {
     document.getElementById("cont").innerHTML = "Namaste " + d +" !";
   } 

}
function work() {
  const input = document.getElementById("taskip");
  const task = input.value.trim();
  
  if (task === ""){
    alert("please enter a task");
    return;
  }
  const tasklist = document.getElementById("wrk");
  const li = document.createElement("li");
  li.textContent = task; tasklist.appendChild(li);
  input.value = "";
}
function bg(){
  document.body.classList.toggle("dark-mode"); 
}
function qoute() {
  const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "The mind is everything. What you think you become. - Buddha",
  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference. - Robert Frost",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];
const randomIndex= Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quotess').innerHTML = randomQuote;
}
function on(){
  document.getElementById('myimg').src="https://cdn.pixabay.com/photo/2014/04/03/10/41/light-311119_640.png" 
}

function togglesections() {
  const greet = document.getElementById('cont');
  const qoute = document.getElementById('quotess');
  greet.style.display = greet.style.display === 'none'? 'block' : 'none';
  qoute.style.display = qoute.style.display === 'none' ? 'block' : 'none';
}
