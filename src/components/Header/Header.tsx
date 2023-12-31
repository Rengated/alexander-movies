import { FC, useContext } from "react";
import { Theme } from "@/store/theme";
import { useRouter } from "next/router";
import changeTheme from "../../../public/static/switch.svg";
import Image from "next/image";

interface HeaderProps {
  withArrow: boolean;
}

export const Header: FC<HeaderProps> = ({ withArrow }) => {
  const { currentTheme, toggleTheme } = useContext(Theme);
  const router = useRouter();

  const onArrowClick = () => {
    router.push("/");
  };

  return (
    <header
      className={`flex items-center py-5 w-full   justify-center items-center  top-0 left-0 px-5 border-b-2 border-gray-700 ${
        currentTheme == "black" ? "text-white" : "text-black"
      }`}
      style={{ zIndex: 6 }}>
      <div className="container flex justify-between">
        <h1 className="text-4xl flex leading-loose ">FILMOTEKA</h1>
        <div className="flex items-center">
          {withArrow && (
            <div
              className={`border px-5 py-3 text-2xl cursor-pointer rounded-lg ${
                currentTheme == "black"
                  ? "bg-white text-black "
                  : "bg-black text-white"
              }`}
              onClick={onArrowClick}>
              <span>{"<"}</span>
              <span className="font-bold ml-4 ">Go back</span>
            </div>
          )}
          <Image
            width={40}
            height={40}
            src={changeTheme}
            className={`cursor-pointer ml-4 hover:invert`}
            alt="theme switch p-2"
            onClick={toggleTheme}
          />
        </div>
      </div>
    </header>
  );
};
