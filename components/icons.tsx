import Image from "next/image";

export const Icons = {
  logo: (props: { className: string }) => (
    <Image
      className={props.className}
      src="/logo.jpeg"
      width={32}
      height={32}
      alt="Schafkopf Tracker Logo"
    />
  ),
};
