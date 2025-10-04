// Tab Switching
document.querySelectorAll(".tab").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    e.currentTarget.classList.add("active");

    document.querySelectorAll(".panel").forEach((p) => (p.hidden = true));
    const tab = e.currentTarget.dataset.tab;
    document.getElementById(tab).hidden = false;
  })
);

// Random helper
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// PUJIAN
const praises = {
  light: [
    () => `Kamu punya selera yang bagus — aku suka caramu memilih hal-hal kecil.`,
    () => `Wajahmu cerah hari ini, bikin suasana jadi enak.`,
  ],
  personal: [
    (n) => `${n ? n + "," : ""} aku kagum sama cara kamu menjelaskan ide — jelas dan hangat.`,
    (n) => `${n ? n + "," : ""} ketulusanmu kelihatan dari perhatian kecilmu.`,
  ],
  funny: [
    () => `Kamu lucu banget — selera humormu keren.`,
    () => `Kalau ada lomba senyum, kamu pasti juara.`,
  ],
};

document.getElementById("makePraise").addEventListener("click", () => {
  const name = document.getElementById("p-name").value.trim();
  const style = document.getElementById("p-style").value;
  const line = pick(praises[style]);
  document.getElementById("p-output").textContent = line(name);
});

// ICEBREAKER
const iceTemplates = [
  (s) => `Kalau kamu suka ${s}, aku juga. Ada rekomendasi?`,
  (s) => `Ngomong-ngomong, kamu suka ${s} ya? Film/lagu favoritmu apa?`,
  (s) => `Kalau ada event ${s}, kamu bakal dateng gak?`,
];

document.getElementById("makeIce").addEventListener("click", () => {
  const sit = document.getElementById("ice-situation").value;
  const mood = document.getElementById("ice-mood").value;
  const base = `${sit.toLowerCase()} ${mood.toLowerCase()}`;
  document.getElementById("ice-output").textContent = pick(iceTemplates)(base);
});

// IDE KENCAN
const ideas = {
  cheap: {
    active: ["Jalan pagi + sarapan di warung lokal", "Berburu mural kota"],
    calm: ["Baca buku di taman", "Nonton film klasik bareng"],
  },
  mid: {
    active: ["Main sepeda santai + piknik", "Berkeliling taman kota"],
    food: ["Tur kuliner lokal", "Kelas masak bareng"],
  },
  free: {
    creative: ["Workshop kerajinan", "Kunjungi pameran seni lokal"],
    food: ["Coba resep baru bareng di rumah"],
  },
};

document.getElementById("makeIdea").addEventListener("click", () => {
  const b = document.getElementById("idea-budget").value;
  const m = document.getElementById("idea-mode").value;
  const out = ideas[b]?.[m] ? pick(ideas[b][m]) : "Coba jalan kaki santai + kopi sore.";
  document.getElementById("idea-output").textContent = out;
});

// RENCANA
document.getElementById("makePlan").addEventListener("click", () => {
  const date = document.getElementById("plan-date").value || "-";
  const place = document.getElementById("plan-place").value || "-";
  const note = document.getElementById("plan-note").value || "";
  const plan = `Rencana:\n${date}\n${place}\nCatatan: ${note}`;
  document.getElementById("plan-output").textContent = plan;
});
