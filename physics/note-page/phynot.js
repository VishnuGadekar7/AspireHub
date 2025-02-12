//topics
const topics = [
  { name: "Motion in One Plane", link: "https://drive.google.com/file/d/12gIjVxby7hVtCRAh4_-BkgmFg0UXOe1t/view?usp=drive_link" },
 
  { name: "Kinetic Theory of Gases", link: "https://drive.google.com/file/d/1rcZpaP0Q9k2tsu5RBybHBzM5vErCInkU/view?usp=drive_link" },
  { name: "Thermodynamics", link: "https://drive.google.com/file/d/1l2mzIijTjQuRfLOCBY2pf0TM9TXUUjls/view?usp=drive_link" },
  { name: "Oscillations", link: "https://drive.google.com/file/d/1mZum0qRqk2uZLQVJpCY-vlavHW6Qt4oB/view?usp=drive_link" },
  { name: "Superposition of Wave", link: "https://drive.google.com/file/d/1lEMqhpKgZ5hmGd10SzQd6NTU9opa4MUh/view?usp=drive_link" },
  { name: "Wave Optics", link: "https://drive.google.com/file/d/1gz66tDB3VSp4ja7D5joWFhVOm-xv_14q/view?usp=drive_link" },
  { name: "Electrostatics", link: "https://drive.google.com/file/d/175zmMeBh_novBTojcv3AgRV6-0RTjIUS/view?usp=drive_link" },
  { name: "Magnetic Fields Due to Electic Current", link: "https://drive.google.com/file/d/11XyWuAAAnyN_UcNwYIcaPtYG80QAsRJE/view?usp=drive_link" },
  { name: "Magnetic Materials", link: "https://drive.google.com/file/d/1dIR2t40GqykBB_NQNQ5OXm9gw69IgVaP/view?usp=drive_link" },
  { name: "Electromagnetic Induction", link: "https://drive.google.com/file/d/1mLSKGXRPYK0rVdxnY9h05EcocvfQClbh/view?usp=drive_link" },
  { name: "Dual Nature of Radiation and Matter", link: "https://drive.google.com/file/d/1uoM3i1E4lllSlw7IS1dZnwRbzxrnqHl_/view?usp=drive_link" },
  { name: "Structure Of Atoms And Nuclei", link: "https://drive.google.com/file/d/15Kfed_NVOwsaoBzf_2xPQmrhGO_Z1z3m/view?usp=drive_link" },
  { name: "Semiconductor Devics", link: "https://drive.google.com/file/d/1uAvlywqGnxFOen9FSIi6cnxGQf7J170M/view?usp=drive_link" },
];

const topicList = document.getElementById("topic-list");

// Render topics
topics.forEach(topic => {
  const listItem = document.createElement("li");
  listItem.classList.add("topic");
  listItem.innerHTML = `
      <span>${topic.name}</span>
      <a href="${topic.link}" class="view-btn">View</a>
  `;
  topicList.appendChild(listItem);
});