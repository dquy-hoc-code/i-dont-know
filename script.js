// Khi tải xong trang, hiện lời chào nhẹ nhàng
window.addEventListener("load", () => {
  console.log("Trang đã tải xong!");
  const greeting = document.createElement("div");
  greeting.innerText = "Chào mừng bạn đến với trang cá nhân của tôi 👋";
  greeting.style.position = "fixed";
  greeting.style.bottom = "20px";
  greeting.style.right = "20px";
  greeting.style.background = "#333";
  greeting.style.color = "#fff";
  greeting.style.padding = "10px 20px";
  greeting.style.borderRadius = "8px";
  greeting.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
  greeting.style.zIndex = "1000";
  greeting.style.opacity = "0";
  greeting.style.transition = "opacity 1s";
  document.body.appendChild(greeting);

  setTimeout(() => (greeting.style.opacity = "1"), 500);
  setTimeout(() => (greeting.style.opacity = "0"), 4000);
  setTimeout(() => greeting.remove(), 5500);
});

// Nút chuyển chế độ tối / sáng
const toggleMode = document.createElement("button");
toggleMode.innerText = "🌓 Chuyển chế độ";
toggleMode.style.position = "fixed";
toggleMode.style.top = "20px";
toggleMode.style.right = "20px";
toggleMode.style.padding = "8px 15px";
toggleMode.style.border = "none";
toggleMode.style.borderRadius = "6px";
toggleMode.style.cursor = "pointer";
toggleMode.style.background = "#444";
toggleMode.style.color = "#fff";
toggleMode.style.fontWeight = "bold";
toggleMode.style.transition = "0.3s";
document.body.appendChild(toggleMode);

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    document.body.style.background = "#121212";
    document.body.style.color = "#fff";
    toggleMode.style.background = "#eee";
    toggleMode.style.color = "#333";
  } else {
    document.body.style.background = "#fff";
    document.body.style.color = "#000";
    toggleMode.style.background = "#444";
    toggleMode.style.color = "#fff";
  }
});
