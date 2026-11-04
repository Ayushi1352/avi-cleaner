import type { CSSProperties, SVGAttributes } from "react";
import type { IconType } from "react-icons";
import {
  LuAppWindow,
  LuArrowLeft,
  LuArrowRight,
  LuBath,
  LuBuilding2,
  LuCalendarDays,
  LuChevronDown,
  LuChevronLeft,
  LuChevronRight,
  LuCircle,
  LuCheck,
  LuCircleCheck,
  LuClock,
  LuCrown,
  LuFileText,
  LuFolder,
  LuGem,
  LuHeadphones,
  LuHeart,
  LuHouse,
  LuImage,
  LuLayoutGrid,
  LuLeaf,
  LuLoaderCircle,
  LuMail,
  LuMap,
  LuMapPin,
  LuMenu,
  LuMessageCircleMore,
  LuPhone,
  LuPhoneCall,
  LuShieldCheck,
  LuSmile,
  LuSprayCan,
  LuStar,
  LuUser,
  LuUsers,
  LuUtensils,
  LuX,
} from "react-icons/lu";
import { FaCalendarAlt, FaCog, FaCoins, FaCouch, FaEye, FaFacebookF, FaGem, FaGraduationCap, FaInstagram, FaLeaf, FaLinkedinIn, FaPlay, FaQuoteLeft, FaStar, FaThumbsUp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsBuildingsFill, BsCheckCircleFill, BsSendFill, BsShieldFill, BsShieldFillCheck } from "react-icons/bs";
import { HiSparkles, HiUserGroup } from "react-icons/hi";
import { IoHome, IoMail, IoWallet } from "react-icons/io5";
import { MdCleaningServices, MdEmail, MdLocationOn, MdOutlineWindow, MdWork } from "react-icons/md";
import { PiSparkleFill } from "react-icons/pi";
import { RiDoubleQuotesL, RiSeedlingFill } from "react-icons/ri";
import { TbTargetArrow, TbVacuumCleaner } from "react-icons/tb";

/**
 * Every icon the site can use, by the name templates.json stores. A new icon is added here once.
 * `props` are svg attributes the icon always gets (a solid version of a line icon).
 * `motion` is the endless animation the icon always plays (components/ui/Motion.tsx), and `className`
 * holds classes the icon always needs (the leaf sways from its stem).
 */
const icons: Record<string, { icon: IconType; motion?: string; className?: string; props?: SVGAttributes<SVGElement> }> = {
  LuAppWindow: { icon: LuAppWindow },
  LuArrowLeft: { icon: LuArrowLeft },
  LuArrowRight: { icon: LuArrowRight },
  LuBath: { icon: LuBath },
  LuBuilding2: { icon: LuBuilding2 },
  LuCalendarDays: { icon: LuCalendarDays },
  LuChevronDown: { icon: LuChevronDown },
  LuChevronLeft: { icon: LuChevronLeft },
  LuChevronRight: { icon: LuChevronRight },
  LuCheck: { icon: LuCheck },
  LuCircleCheck: { icon: LuCircleCheck },
  LuClock: { icon: LuClock },
  LuCrown: { icon: LuCrown },
  LuFileText: { icon: LuFileText },
  LuFolder: { icon: LuFolder },
  LuGem: { icon: LuGem },
  LuHeadphones: { icon: LuHeadphones },
  LuHeart: { icon: LuHeart },
  LuHeartFilled: { icon: LuHeart, props: { fill: "currentColor", strokeWidth: 0 } },
  LuPhoneSolid: { icon: LuPhone, props: { fill: "currentColor", strokeWidth: 0 } },
  LuMailBold: { icon: LuMail, props: { strokeWidth: 2.2 } },
  LuMapSolid: { icon: LuMap, props: { fill: "currentColor", stroke: "var(--color-contact-stroke)", strokeWidth: 1.6 } },
  LuMapPinSolid: { icon: LuMapPin, props: { fill: "currentColor", stroke: "var(--color-contact-form-stroke)", strokeWidth: 1.8 } },
  LuHouse: { icon: LuHouse },
  LuImage: { icon: LuImage },
  LuLayoutGrid: { icon: LuLayoutGrid },
  LuLeaf: { icon: LuLeaf },
  LuLoaderCircle: { icon: LuLoaderCircle },
  LuMail: { icon: LuMail },
  LuMap: { icon: LuMap },
  LuMapPin: { icon: LuMapPin },
  LuMenu: { icon: LuMenu },
  LuMessageCircleMore: { icon: LuMessageCircleMore },
  LuPhone: { icon: LuPhone },
  LuPhoneCall: { icon: LuPhoneCall },
  LuShieldCheck: { icon: LuShieldCheck },
  LuSmile: { icon: LuSmile },
  LuSprayCan: { icon: LuSprayCan },
  LuStar: { icon: LuStar },
  LuUser: { icon: LuUser },
  LuUsers: { icon: LuUsers },
  LuUtensils: { icon: LuUtensils, motion: "pulse" },
  LuX: { icon: LuX },
  // Solid icons, each with its own endless motion.
  FaLeaf: { icon: FaLeaf, motion: "sway", className: "origin-bottom" },
  RiSeedlingFill: { icon: RiSeedlingFill, motion: "sway", className: "origin-bottom" },
  BsShieldFillCheck: { icon: BsShieldFillCheck, motion: "heartbeat" },
  HiSparkles: { icon: HiSparkles, motion: "twinkle" },
  IoHome: { icon: IoHome, motion: "float" },
  HiUserGroup: { icon: HiUserGroup, motion: "pulse" },
  FaGem: { icon: FaGem, motion: "float" },
  FaThumbsUp: { icon: FaThumbsUp, motion: "float" },
  BsBuildingsFill: { icon: BsBuildingsFill, motion: "float" },
  FaCouch: { icon: FaCouch, motion: "pulse" },
  FaQuoteLeft: { icon: FaQuoteLeft, motion: "float" },
  FaPlay: { icon: FaPlay, motion: "pulse" },
  BsSendFill: { icon: BsSendFill, motion: "float" },
  FaStar: { icon: FaStar, motion: "twinkle" },
  RiDoubleQuotesL: { icon: RiDoubleQuotesL, motion: "float" },
  MdEmail: { icon: MdEmail, motion: "float" },
  MdLocationOn: { icon: MdLocationOn, motion: "pulse" },
  BsShieldFill: { icon: BsShieldFill, motion: "heartbeat" },
  MdWork: { icon: MdWork, motion: "float" },
  FaCog: { icon: FaCog, motion: "spin" },
  FaGraduationCap: { icon: FaGraduationCap, motion: "pulse" },
  MdOutlineWindow: { icon: MdOutlineWindow, motion: "pulse" },
  TbVacuumCleaner: { icon: TbVacuumCleaner, motion: "pulse" },
  TbTargetArrow: { icon: TbTargetArrow },
  FaEye: { icon: FaEye },
  FaCoins: { icon: FaCoins },
  PiSparkleFill: { icon: PiSparkleFill },
  IoMail: { icon: IoMail },
  MdCleaningServices: { icon: MdCleaningServices },
  IoWallet: { icon: IoWallet },
  FaCalendarAlt: { icon: FaCalendarAlt },
  BsCheckCircleFill: { icon: BsCheckCircleFill },
  // Social networks.
  FaFacebookF: { icon: FaFacebookF, motion: "pulse" },
  FaXTwitter: { icon: FaXTwitter, motion: "pulse" },
  FaLinkedinIn: { icon: FaLinkedinIn, motion: "pulse" },
  FaInstagram: { icon: FaInstagram, motion: "pulse" },
  FaYoutube: { icon: FaYoutube, motion: "pulse" },
};

type Props = Omit<SVGAttributes<SVGElement>, "name"> & {
  name: string;
  className?: string;
  style?: CSSProperties;
  /** Overrides the icon's own motion ("" turns it off). */
  motion?: string;
};

export const Icon = ({ name, className = "", motion, ...rest }: Props) => {
  const entry = icons[name];
  if (!entry) {
    if (process.env.NODE_ENV !== "production") console.warn(`Icon "${name}" is not in components/ui/Icon.tsx`);
    return <LuCircle aria-hidden="true" className={className} />;
  }
  const Glyph = entry.icon;
  const play = motion ?? entry.motion;
  // Props left undefined must not reach the svg: they would wipe the icon's own attributes (e.g. strokeWidth="0" of solid icons).
  const props = Object.fromEntries(Object.entries(rest).filter(([, value]) => value !== undefined));
  return (
    <Glyph
      aria-hidden="true"
      data-motion={play || undefined}
      className={`${entry.className ?? ""} ${className}`.trim()}
      {...entry.props}
      {...props}
    />
  );
};
