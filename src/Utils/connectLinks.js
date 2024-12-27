import { RiCalendarScheduleFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import CalendlyEmbed from "@/components/CalendlyEmbed.component";

export const connectLinks = [
  {
    icons: (
      <>
        <RiCalendarScheduleFill size={20} />
        <CalendlyEmbed
          url="https://calendly.com/nsdr2000/30min"
          text="Schedule Call"
        />
      </>
    ),
    name: "",
  },
  {
    icons: <IoMdMail size={20} />,
    name: "Email Me",
    url: "mailto:nsdr2000@gmail.com",
  },
];
