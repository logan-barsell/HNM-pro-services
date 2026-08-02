"use client";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import IconCardSection from "@/components/shared/IconCardSection";
import { aboutValues } from "@/content/about";

const iconsById = {
  compassion: FavoriteBorderOutlinedIcon,
  dependability: ScheduleOutlinedIcon,
  respect: HandshakeOutlinedIcon,
  communication: ForumOutlinedIcon,
  personalized: VolunteerActivismOutlinedIcon,
};

export default function ValuesSection() {
  const items = aboutValues.map((value) => ({
    id: value.id,
    title: value.title,
    description: value.description,
    icon: iconsById[value.id] || FavoriteBorderOutlinedIcon,
  }));

  return (
    <IconCardSection
      headingId="values-heading"
      title="Values and Approach"
      supporting="These principles guide how HNM Professional Services shows up for clients, pets, and homes."
      items={items}
      tone="cream"
    />
  );
}
