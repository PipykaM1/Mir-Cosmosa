document.addEventListener("dragstart", function(e) {
    e.preventDefault();
});

document.addEventListener("selectstart", function(e) {
    e.preventDefault();
});
const orbits = [
    {
        element: document.querySelector(".orbit-mercury"),
        speed: 0.8,
        angle: 0
    },
    {
        element: document.querySelector(".orbit-venus"),
        speed: 0.5,
        angle: 45
    },
    {
        element: document.querySelector(".orbit-earth"),
        speed: 0.35,
        angle: 90
    },
    {
        element: document.querySelector(".orbit-mars"),
        speed: 0.28,
        angle: 180
    },
    {
        element: document.querySelector(".orbit-jupiter"),
        speed: 0.18,
        angle: 220
    },
    {
        element: document.querySelector(".orbit-saturn"),
        speed: 0.14,
        angle: 270
    },
    {
        element: document.querySelector(".orbit-uranus"),
        speed: 0.10,
        angle: 320
    },
    {
        element: document.querySelector(".orbit-neptune"),
        speed: 0.07,
        angle: 350
    }
];
function animate() {
    orbits.forEach(orbit => {
        if (!orbit.element) return;

        orbit.angle += orbit.speed;

        orbit.element.style.transform =
            `translate(-50%, -50%) rotate(${orbit.angle}deg)`;
    });

    requestAnimationFrame(animate);
}

animate();