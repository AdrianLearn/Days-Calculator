const date1 = document.getElementById("date1");
const date2 = document.getElementById("date2");
const resultSpan = document.querySelector('span');
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
date1.addEventListener('input',answer);
date2.addEventListener('input',answer);
function answer()
{
  const d1 = new Date(date1.value);
	const d2 = new Date(date2.value);
  const daysBetween = (d2 - d1) / _MS_PER_DAY;
  console.log(daysBetween);
  if(isNaN(daysBetween))
     {
     resultSpan.textContent = "x";
     }
  else if (daysBetween < 0)
  {
    resultSpan.textContent = Math.abs(daysBetween);
  }
  else{
resultSpan.textContent = daysBetween;
  }
}
