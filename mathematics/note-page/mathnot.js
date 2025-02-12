//topics
const topics = [
  { name: "Mathematical Logic", link: "https://drive.google.com/file/d/1bpN_uvXRBuMnys4w36DBkl_Ji1QMzH0b/view?usp=drive_link" },
  { name: "Matrices", link: "https://drive.google.com/file/d/1oZKzM7-PcUlBZXWXhPmcacxXaEDBJa-4/view?usp=drive_link" },
  { name: "Trignometric Functions", link: "https://drive.google.com/file/d/1n4omRTgL3GM8Bjt6oz7Tc_42GCEayYdd/view?usp=drive_link" },
  { name: "Pair of Straight Line", link: "https://drive.google.com/file/d/1q7y2ZR5XwFIeMXUwRo5LENE3lSu04Ahx/view?usp=drive_linkhttps://drive.google.com/file/d/1fNI8_LWvoUnvTF4Vdx-q8UV6FYvm__nl/view?usp=drive_link" },
  { name: "Vectors", link: "https://drive.google.com/file/d/1w0_SIGWBubZLNqvK_mMr5TXGwBYn9Sbi/view?usp=drive_link" },
  { name: "Line And Plane", link: "/mathematics/pages/supwave.html" },
  { name: "Linear programming", link: "https://drive.google.com/file/d/1B8y0oPf6d62rffnCEvn_hxYBqbA7o0_T/view?usp=drive_link" },
  { name: "Differentiation", link: "https://drive.google.com/file/d/13FtXXTRGYNERyT89syLZ45BmCotkK0O5/view?usp=drive_link" },
  { name: "Application Of Derivatives", link: "https://drive.google.com/file/d/1x1s6IB6FocBKNspKR48SktOswg8-gnYC/view?usp=drive_link" },
  { name: "Indefinite Integration", link: "https://drive.google.com/file/d/1tCP_PljhGqfXydLtu5GmYsOe8pPtElTc/view?usp=drive_link" },
  { name: "Definite Integration", link: "https://drive.google.com/file/d/1NxPup0EhL62LEZQD-cJS04hCdmPx7-81/view?usp=drive_link" },
  { name: "Application Of Definite Integration", link: "https://drive.google.com/file/d/1i0Efot0MThAm2NhhB3a-QQjD-WRiliHM/view?usp=drive_link" },
  { name: "Differential Equation", link: "https://drive.google.com/file/d/1tZt_Y67S4x95dY3PtUYnzakIMg5TTV7u/view?usp=drive_link" },
  { name: "Prababilty Distribution", link: "https://drive.google.com/file/d/1JDOyYhJJ-D5Bplj_Nd1wsuZtTkhjpyFX/view?usp=drive_link" },
  { name: "Binomial Distrubution", link: "https://drive.google.com/file/d/1JDOyYhJJ-D5Bplj_Nd1wsuZtTkhjpyFX/view?usp=drive_link" },
]

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