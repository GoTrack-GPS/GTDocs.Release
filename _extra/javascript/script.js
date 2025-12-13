function openTab(tabId, button){
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  document.querySelectorAll('.menu-item').forEach(b => b.classList.remove('active'));
  if(button) button.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".range-select").forEach(select => {
    const min = parseInt(select.dataset.min);
    const max = parseInt(select.dataset.max);
    for (let i = min; i <= max; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = i;
      select.appendChild(opt);
    }
  });
});






