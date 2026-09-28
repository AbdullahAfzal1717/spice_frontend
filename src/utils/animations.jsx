
import gsap from "gsap";
export const AnimatePageIn = () => {
  const bannerZero = document.getElementById("banner-0");
  const banners = [
    document.getElementById("banner-1"),
    document.getElementById("banner-2"),
    document.getElementById("banner-3"),
    document.getElementById("banner-4"),
  ].filter(Boolean);

  if (!bannerZero || banners.length !== 4) {
    return undefined;
  }

  const finish = () => {
    gsap.set([bannerZero, ...banners], {
      autoAlpha: 0,
      pointerEvents: "none",
    });
    bannerZero.remove();
  };

  const tl = gsap.timeline({ onComplete: finish });
  tl.set(banners, { yPercent: 0 })
    .to(banners, {
      yPercent: 100,
      stagger: 0.5,
      duration: 1.5,
      ease: "power1.inOut",
    });

  return () => {
    tl.kill();
    finish();
  };
};

export const AnimatePageOut = () => {
  const bannerZero = document.getElementById("banner-0");
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: -100,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
      stagger: 0.5,
      duration: 1.5,
      ease: "power1.inOut",
      onComplete: () => {
        bannerZero.remove();
        bannerOne.remove();
        bannerTwo.remove();
        bannerThree.remove();
        bannerFour.remove();
      }
    });
  }
};
