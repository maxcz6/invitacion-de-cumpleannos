document.addEventListener("DOMContentLoaded", () => {
  const coverScreen = document.getElementById("coverScreen");
  const inviteView = document.getElementById("inviteView");
  const enterButton = document.getElementById("enterButton");
  const video = document.getElementById("inviteVideo");

  const openInvitation = async () => {
    coverScreen?.setAttribute("aria-hidden", "true");
    inviteView?.setAttribute("aria-hidden", "false");
    inviteView?.classList.add("is-open");

    if (!video) return;

    video.currentTime = 0;
    video.volume = 0.9;
    video.muted = false;

    try {
      await video.play();
    } catch {
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  if (!coverScreen) {
    openInvitation();
  } else {
    enterButton?.addEventListener("click", () => {
      openInvitation();
    });

    coverScreen?.addEventListener("click", () => {
      openInvitation();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        openInvitation();
      }
    });
  }

  if (video) {
    video.addEventListener("ended", () => {
      video.currentTime = 0;
      video.pause();
    });
  }
});
