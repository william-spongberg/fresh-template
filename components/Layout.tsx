import { ComponentChildren } from "preact";
import * as Text from "../components/Text.tsx";
import Button from "../components/Button.tsx";
import * as Icons from "../components/Icons.tsx";

// colours
const BACKGROUND_COLOUR = "bg-white";
const FOOTER_COLOUR = "bg-[#f7f7f8]";
const ELEMENT_COLOUR = "bg-white";
const BUTTON_COLOUR = "bg-[#F0EBD8]";
const BUTTON_HOVER_COLOUR = "hover:bg-[#F0EBD0]";
const TEXT_COLOUR = "text-black";

// sizes
const ELEMENT_SIZE = "max-w-screen-md";

interface ChildrenProps {
  children: ComponentChildren;
}

interface PageProps {
  colour?: string;
  children: ComponentChildren;
}

export function Page({
  colour = BACKGROUND_COLOUR,
  children,
}: PageProps) {
  return (
    <div class={`flex flex-col min-h-screen ${colour}`}>
      <div
        class={`items-center justify-center px-2 sm:px-4 pt-2 mt-8 pb-2`}
      >
        {children}
      </div>
    </div>
  );
}

interface ElementProps {
  children: ComponentChildren;
  title?: string;
  colour?: string;
  textColour?: string;
  size?: string;
}

export function Element({
  title = "",
  colour = ELEMENT_COLOUR,
  textColour = TEXT_COLOUR,
  size = ELEMENT_SIZE,
  children,
}: ElementProps) {
  return (
    <div
      class={`px-1 sm:px-6 pt-2 pb-2 mx-auto ${colour} rounded-2xl w-full ${size}`}
    >
      <Center>
        <Text.Title textColour={textColour}>{title}</Text.Title>
        <br />
        {children}
        <br />
      </Center>
    </div>
  );
}

interface GridProps {
  customGridCols?: string;
  children: ComponentChildren;
}

export function Grid({ customGridCols, children }: GridProps) {
  if (!customGridCols) {
    const childCount = Array.isArray(children) ? children.length : 1;
    const gridCols = childCount === 2
      ? `grid-cols-2`
      : "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    customGridCols = gridCols;
  }

  return (
    <div
      class={`grid ${customGridCols} gap-1 mt-4 mb-4`}
    >
      {children}
    </div>
  );
}

export function Center({ children }: ChildrenProps) {
  return (
    <div class="flex flex-col items-center">{children}</div>
  );
}

interface HeaderProps {
  title?: string;
  colour?: string;
  textColour?: string;
}

export function Header({
  title = "",
  colour = BACKGROUND_COLOUR,
  textColour = TEXT_COLOUR,
}: HeaderProps) {
  return (
    <>
      <header
        className={`flex items-center justify-center sm:justify-start ${colour} px-4`}
      >
        <Button
          href="/"
          backgroundColour={BUTTON_COLOUR}
          hoverBackgroundColour={BUTTON_HOVER_COLOUR}
        >
          <Icons.Logo />
        </Button>
        {title && (
          <Text.Title textColour={textColour}>
            {title}
          </Text.Title>
        )}
        <div class="md:ml-auto ml-0 flex">
          <Button href="mailto:william@spongberg.dev">
            <Icons.Email />
          </Button>
          <Button href="https://www.linkedin.com/in/william-spongberg/">
            <Icons.LinkedIn />
          </Button>
          <Button href="https://github.com/william-spongberg">
            <Icons.GitHub />
          </Button>
        </div>
      </header>
      <hr className="border-t border-[#f7f7f8] w-full" />
    </>
  );
}

interface FooterProps {
  colour?: string;
  textColour?: string;
  authorProps?: AuthorProps;
  isBeta?: boolean;
}

interface AuthorProps {
  name?: string;
  link?: string;
}

export function Footer({
  colour = FOOTER_COLOUR,
  textColour = TEXT_COLOUR,
  authorProps = {
    name: "Author",
    link: "/",
  },
  isBeta = true,
}: FooterProps) {
  return (
    <>
      <footer
        class={`flex flex-col items-center w-auto ${colour} ${textColour}`}
      >
        <div class="flex flex-col md:flex-row justify-center items-center h-auto md:h-16 p-4 md:p-2 pb-4 md:pb-2 py-2">
          {isBeta
            ? (
              <>
                <p class="text-[#748CAB] mb-2 md:mb-0">
                  This website is in beta.
                </p>
                <div class="hidden md:block">&nbsp;</div>
              </>
            )
            : null}
          <p>
            &copy; {authorProps.name}{" "}
            {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
