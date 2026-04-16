import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface MenuItem {
  link: string;
  label: string;
}

interface ScrollSpyState {
  activeMenuItem: MenuItem | null;
  menuItems: MenuItem[];
}

export default function useScrollSpy(offset = 0) {
  const menuItems: MenuItem[] = [];

  const state = reactive<ScrollSpyState>({
    activeMenuItem: null,
    menuItems,
  });

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      const menuItem = menuItems[i];
      const target = document.querySelector(menuItem.link);

      if (target) {
        const rect = target.getBoundingClientRect();
        const targetTop = rect.top + scrollTop - offset;

        if (scrollTop >= targetTop) {
          state.activeMenuItem = menuItem;
          return;
        }
      }
    }

    state.activeMenuItem = null;
  };

  const addMenuItem = (menuItem: MenuItem) => {
    state.menuItems.push(menuItem);
  };

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    state,
    addMenuItem,
  };
}
