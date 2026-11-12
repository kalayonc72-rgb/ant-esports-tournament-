const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwQla9U_6QTEFqwD2WGkWhGYSQTNvjLVCZmLHGblMT8RHUOZ5-E0wTudVKuFEq8kqFW/exec";

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("reg");
const message = document.getElementById("msg");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = "SUBMITTING...";

  const data = {
    teamName: form.elements.team.value.trim(),
    captainName: form.elements.captain.value.trim(),
    phone: form.elements.phone.value.trim(),
    facebook: form.elements.facebook.value.trim(),
    player1: form.elements.p1.value.trim(),
    uid1: form.elements.uid1.value.trim(),
    player2: form.elements.p2.value.trim(),
    uid2: form.elements.uid2.value.trim(),
    player3: form.elements.p3.value.trim(),
    uid3: form.elements.uid3.value.trim(),
    player4: form.elements.p4.value.trim(),
    uid4: form.elements.uid4.value.trim(),
    substituteName: form.elements.sub.value.trim(),
    substituteUid: form.elements.subuid.value.trim()
  };

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    message.textContent =
      "Registration request sent! Check with ANT ESPORTS for confirmation.";

    message.style.color = "#f5c400";
    form.reset();

  } catch (error) {
    message.textContent = "Network error. Please try again.";
    message.style.color = "#ff5555";
  }

  button.disabled = false;
  button.textContent = "SUBMIT REGISTRATION";
});
