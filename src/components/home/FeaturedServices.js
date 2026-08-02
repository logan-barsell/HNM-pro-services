"use client";

import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconCardSection from "@/components/shared/IconCardSection";
import { homeServices } from "@/content/home";

const icons = {
  "pet-sitting": PetsOutlinedIcon,
  "companion-care": FavoriteBorderOutlinedIcon,
  "house-sitting": HomeOutlinedIcon,
};

export default function FeaturedServices() {
  const items = homeServices.map((service) => ({
    id: service.id,
    title: service.name,
    description: service.summary,
    icon: icons[service.id] || PetsOutlinedIcon,
    href: service.href,
    ctaLabel: service.learnMoreLabel,
  }));

  return (
    <IconCardSection
      headingId="featured-services-heading"
      title="Featured Services"
      supporting="Thoughtful support for the people, pets, and homes that matter most."
      items={items}
      itemSize={{ xs: 12, md: 4 }}
    />
  );
}
