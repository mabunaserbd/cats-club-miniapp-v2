window.addEventListener("message", (event) => {
  if (event.data?.type === "warpcast/payment/success") {
    alert("✅ Payment successful! Feature unlocked.");
    // unlock feature logic here
  } else if (event.data?.type === "warpcast/payment/failure") {
    alert("❌ Payment failed or cancelled.");
  }
});

document.getElementById("checkinBtn").addEventListener("click", () => {
  window.parent.postMessage({
    action: "pay",
    chain: "base",
    to: "0x56d9bfC36b0431F3E677Ef16685b04AA2Ccd40F4",
    amount: "2000000000000000",
    currency: "eth"
  }, "*");
});

document.getElementById("upgradeBtn").addEventListener("click", () => {
  window.parent.postMessage({
    action: "pay",
    chain: "base",
    to: "0x56d9bfC36b0431F3E677Ef16685b04AA2Ccd40F4",
    amount: "300000000000000",
    currency: "eth"
  }, "*");
});