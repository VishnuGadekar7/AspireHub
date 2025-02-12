//topics
const topics = [
  { name: "Solid State", link: "https://drive.google.com/file/d/1WptD0qh8Nr76LeuShI6E8Ybl3y7p6z7t/view?usp=sharing" },
  { name: "Solutions", link: "https://drive.google.com/file/d/1MOEwdKUg14cqqbs0cydSWeXv0pBuCvG0/view?usp=sharing" },
  { name: "Ionic Equilibrium", link: "https://drive.google.com/file/d/1hN-8h8G2kBvG7x4emPmBMpgStEAK_GlK/view?usp=sharing" },
  {
    name: "Chemical Thermodynamics",
    link: "https://drive.google.com/file/d/1gQt2Imymvmq23DoSd0qWPDCbuSWfZsDB/view?usp=sharing",
  },
  { name: "Electrochemistry", link: "https://drive.google.com/file/d/1iroy3_pKlCAmt7rcPCU9G1pZ-gYV3wGN/view?usp=drive_link" },
  { name: "Chemical Kinetics", link: "https://drive.google.com/file/d/1aPzdjoYSuU4aQvGnLPtyINiXtqOWmBeV/view?usp=sharing" },
  {
    name: "Elements of Group 16,17 and 18",
    link: "https://drive.google.com/file/d/1p9De4FCQc6WshplHwTfZuGutKqc4cUqO/view?usp=drive_link",
  },
  {
    name: "Tranisition and Inner Transition",
    link: "https://drive.google.com/file/d/1UoLhS8obB5OHac_eFF6K2lj4j4eGbZgH/view?usp=sharing",
  },
  { name: "Coordination Compound", link: "https://drive.google.com/file/d/19oVZQbk4sI0KFgYqV5Q3_1MThsH9zlPK/view?usp=sharing" },
  { name: "Halogen Derivatives", link: "https://drive.google.com/file/d/16ZSjQmmQCbRhl8XakGwFOfFKNb5p3xZ_/view?usp=sharing" },
  {
    name: "Alcohols,Phenols,and Ethers",
    link: "https://drive.google.com/file/d/1MRWvgsE3vCOMrdtL7JDtiQCslm8WDMNS/view?usp=sharing",
  },
  {
    name: "Aldehydes,Ketones,and Carboxylic Acids",
    link: "https://drive.google.com/file/d/1muXbdbPwbaAdo-OqDkSIAIW0vOBZ86qj/view?usp=sharing",
  },
  { name: "Amines", link: "https://drive.google.com/file/d/1pgFiFQXIpHQZ8yJRevvPB6yIsbak7JSp/view?usp=sharing" },
  { name: "Biomolecules", link: "https://drive.google.com/file/d/1Jd60_UzhWbFAwDDkbih_McXZVuwkUEZ8/view?usp=sharing" },
  {
    name: "Introduction To Polymer Chemistry",
    link: "https://drive.google.com/file/d/1DE0y1kkz9wHw4khd2dgplipVKfJZ9SPY/view?usp=sharing",
  },
  {
    name: "Green Chemistry And Nanochemistry",
    link: "https://drive.google.com/file/d/1S3aAFkbs5A8xWRdeRC2342mQTKx7OLLO/view?usp=sharing",
  },
];

const topicList = document.getElementById("topic-list");

// Render topics
topics.forEach((topic) => {
  const listItem = document.createElement("li");
  listItem.classList.add("topic");
  listItem.innerHTML = `
      <span>${topic.name}</span>
      <a href="${topic.link}" class="view-btn">View</a>
  `;
  topicList.appendChild(listItem);
});
