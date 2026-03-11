(() => {
  const serviceItems = Array.from(document.querySelectorAll('.services-list li'));
  const servicePanels = Array.from(document.querySelectorAll('.service-panel'));
  if (!serviceItems.length || !servicePanels.length) return;

  let activeIndex = 0;
  const intervalMs = 4000;

  const setActive = (nextIndex) => {
    activeIndex = nextIndex % serviceItems.length;
    serviceItems.forEach((item, idx) => item.classList.toggle('active', idx === activeIndex));
    servicePanels.forEach((panel, idx) => panel.classList.toggle('active', idx === activeIndex));
  };

  serviceItems.forEach((item, idx) => {
    item.addEventListener('click', () => setActive(idx));
  });

  setInterval(() => setActive(activeIndex + 1), intervalMs);
})();
