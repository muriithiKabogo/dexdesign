
const togglesEl = document.querySelectorAll(".stateToggle");

togglesEl.forEach((el, i) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        const targetEl = document.getElementById(el.dataset.droptarget);
        if(targetEl.classList.contains("dex_active")) {
            targetEl.classList.remove("dex_active");
        }
        else {
            targetEl.classList.add("dex_active");
        }
    });
});