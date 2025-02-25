import { ComponentChildren } from "preact";

const TEXT_COLOUR = "text-black";

interface TextProps {
  textColour?: string;
  children: ComponentChildren;
}

export function Title({ textColour = TEXT_COLOUR, children }: TextProps) {
  return (
    <h1
      class={`text-3xl sm:text-4xl px-4 font-raleway ${textColour} text-center`}
    >
      {children}
    </h1>
  );
}

export function Heading({ textColour = TEXT_COLOUR, children }: TextProps) {
  return (
    <h2
      class={`text-xl sm:text-2xl py-2 px-2 font-raleway ${textColour} text-center`}
    >
      {children}
    </h2>
  );
}

export function SubHeading({ textColour = TEXT_COLOUR, children }: TextProps) {
  return (
    <h3
      class={`text-lg sm:text-xl py-1 px-1 font-raleway ${textColour} text-center`}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ textColour = TEXT_COLOUR, children }: TextProps) {
  return (
    <p
      class={`text-base sm:text-lg font-raleway ${textColour} mt-4 mb-4 text-center`}
    >
      {children}
    </p>
  );
}

export function Small({ textColour = TEXT_COLOUR, children }: TextProps) {
  return (
    <p class={`text-sm font-raleway ${textColour} text-center`}>
      {children}
    </p>
  );
}

interface LinkProps extends TextProps {
  href: string;
}

export function Link({ textColour = TEXT_COLOUR, children, href }: LinkProps) {
  return (
    <a
      class={`text-base sm:text-lg font-raleway ${textColour} underline text-center`}
      href={href}
    >
      {children}
    </a>
  );
}
