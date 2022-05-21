import { FC } from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  Viber,
  Telegram,
} from "src/assets/images/icons";

export enum IconType {
  Basket = "Basket",
  Wishlist = "Wishlist",
  CloseBtn = "CloseBtn",
  Facebook = "Facebook",
  Viber = "Viber",
  Instagram = "Instagram",
  YouTube = "YouTube",
  Telegram = "Telegram",
  User = "User",
  Truck = "Truck",
  Privacy = "Privacy",
  Quality = "Quality",
  Hamburger = "Hamburger",
  NoIcon = "NoIcon",
}

interface IconProps extends Omit<SvgIconProps, "color"> {
  icon: IconType;
  color?: string;
}

export const Icon: FC<IconProps> = ({ icon, color, ...rest }) => {
  const { [icon]: Icon } = {
    [IconType.Facebook]: Facebook,
    [IconType.Instagram]: Instagram,
    [IconType.Viber]: Viber,
    [IconType.Telegram]: Telegram,
    [IconType.YouTube]: YouTube,
  } as Record<IconType, React.ElementType>;

  return (
    <SvgIcon data-testid="icon" component={Icon} htmlColor={color} {...rest} />
  );
};
