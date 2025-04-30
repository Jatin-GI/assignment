"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { useThemeStore } from "@/stores/themeStore";
import { Button } from "@/components/ui/button";

const themes = [
  { value: "theme-organ", label: "Organ Transplant" },
  { value: "theme-cosmetic", label: "Cosmetic Surgery" },
  { value: "theme-ai", label: "Medical AI" },
];

export default function ThemeSwitcher() {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="transition-all bg-transparent duration-300">
            Theme
          </NavigationMenuTrigger>
          <NavigationMenuContent className="min-w-[200px] bg-transparent shadow-lg rounded-lg p-2 z-[100]">
            <div className="flex flex-col gap-1">
              {themes.map((t) => (
                <Button
                  key={t.value}
                  variant={theme === t.value ? "default" : "ghost"}
                  onClick={() => setTheme(t.value)}
                  className="justify-start"
                >
                  {t.label}
                </Button>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
