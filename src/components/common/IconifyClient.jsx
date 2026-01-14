"use client";

import { Icon } from "@iconify-icon/react";

export default function IconifyClient({ icon, ...props }) {
  return <Icon icon={icon} {...props} />;
}
