document.addEventListener("DOMContentLoaded", async () => {
  const includes = document.querySelectorAll("[data-include]");
  await Promise.all([...includes].map(async (el) => {
    const file = el.getAttribute("data-include");
    try {
      const res = await fetch(file);
      if (!res.ok) throw new Error(file);
      el.innerHTML = await res.text();
    } catch (err) {
      console.error("Include failed:", file, err);
    }
  }));
});
