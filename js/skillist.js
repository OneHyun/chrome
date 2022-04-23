const skillList = document.querySelector(".skill-list");
const skillListItem = document.querySelectorAll(".skill-list li");
const skillListBtn = document.querySelector(".skill-openbtn");

function listOnOff(event) {
  if (!event.path[0].classList.contains("open")) {
    skillListBtn.classList.add("open");
    skillList.classList.add("open");
    if (skillListItem) {
      skillListItem.forEach((element) => {
        element.classList.add("open");
      });
    }
  } else {
    skillListBtn.classList.remove("open");
    skillList.classList.remove("open");
    if (skillListItem) {
      skillListItem.forEach((element) => {
        element.classList.remove("open");
      });
    }
  }
}

skillListBtn.addEventListener("click", listOnOff);
