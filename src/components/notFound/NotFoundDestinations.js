"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import IconCardSection from "@/components/shared/IconCardSection";
import { notFoundDestinations } from "@/content/notFound";

const iconsById = {
  services: HandshakeOutlinedIcon,
  about: PersonOutlineOutlinedIcon,
  gallery: PhotoLibraryOutlinedIcon,
  contact: EmailOutlinedIcon,
};

export default function NotFoundDestinations() {
  const items = notFoundDestinations.items.map((item) => ({
    ...item,
    icon: iconsById[item.id] || HandshakeOutlinedIcon,
  }));

  return (
    <IconCardSection
      headingId="not-found-destinations-heading"
      title={notFoundDestinations.title}
      supporting={notFoundDestinations.supporting}
      items={items}
      itemSize={{ xs: 12, sm: 6, md: 3 }}
      tone="cream"
    />
  );
}
