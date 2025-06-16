import { debounce, throttle } from "../_debounce-throttle";

function setTeamDirHeight() {
  const teamDirElement = document.querySelector(".hav-team-dir");

  if (teamDirElement) {
    teamDirElement.style.setProperty("--team-dir-max-height", `none`);
    const height = teamDirElement.offsetHeight;
    const calculatedHeight = Math.floor(height / 3) + 70;
    teamDirElement.style.setProperty(
      "--team-dir-max-height",
      `${calculatedHeight}px`,
    );
  }
}

window.addEventListener("load", setTeamDirHeight);
window.addEventListener("resize", debounce(setTeamDirHeight, 250));
