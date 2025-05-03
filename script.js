function checkOdd() {
  const input = document.getElementById("numberInput").value.trim();
  const responseDiv = document.getElementById("response");

  if (!/^\d+$/.test(input)) {
    responseDiv.textContent = "Not a f*ing number";
    return;
  }

  const lastDigit = parseInt(input.slice(-1), 10);
  const isOdd = lastDigit % 2 === 1;
  responseDiv.textContent = isOdd ? "Hell yeah, it's odd !" : "F*ck no! It's not !";
}
