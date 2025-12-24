async function getPrice() {
  const coin = document.getElementById("coinSelect").value;
  const coinName = document.getElementById("coinSelect")
                     .options[document.getElementById("coinSelect").selectedIndex].text;

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=inr&include_24hr_change=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const price = data[coin].inr;
    const change = data[coin].inr_24h_change.toFixed(2);

    document.getElementById("coinName").innerText = coinName;
    document.getElementById("price").innerText = "₹ " + price;
    document.getElementById("change").innerText = change + " %";

    // Color change
    document.getElementById("change").style.color =
      change >= 0 ? "lightgreen" : "red";

  } catch (error) {
    alert("Error fetching data");
  }
}

// Load default price
getPrice();

