"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useId, useMemo, useRef, useState } from "react";
import {
  GALLERY_PAGE_SIZE,
  galleryItems,
  gallerySection,
} from "@/content/gallery";
import { brandRadii } from "@/theme/brandTokens";

export default function GalleryGrid() {
  const headingId = useId();
  const regionRef = useRef(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(galleryItems.length / GALLERY_PAGE_SIZE),
  );

  // Clamped so a shrinking gallery can't leave the view on an empty page.
  const currentPage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * GALLERY_PAGE_SIZE;
    return galleryItems.slice(start, start + GALLERY_PAGE_SIZE);
  }, [currentPage]);

  const handlePageChange = (_event, nextPage) => {
    setPage(nextPage);
    regionRef.current?.focus({ preventScroll: true });
    regionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box
          ref={regionRef}
          tabIndex={-1}
          sx={{
            outline: "none",
            maxWidth: "64rem",
            mx: "auto",
            scrollMarginTop: { xs: 96, md: 112 },
          }}
        >
          <Typography
            id={headingId}
            variant="h2"
            component="h2"
            sx={{ mb: 1.5 }}
          >
            {gallerySection.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 4, md: 5 }, maxWidth: "36rem" }}
          >
            {gallerySection.supporting}
          </Typography>

          {galleryItems.length === 0 ? (
            <Typography variant="body1" color="text.secondary">
              {gallerySection.emptyMessage}
            </Typography>
          ) : (
            <>
              <Box
                component="ul"
                sx={{
                  listStyle: "none",
                  m: 0,
                  p: 0,
                  // Inset the single-column mobile layout so tiles don't dominate the viewport.
                  px: { xs: 3, sm: 0 },
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                  },
                  gap: { xs: 2, sm: 2.5, md: 3 },
                }}
              >
                {pageItems.map((item) => (
                  <Box
                    key={item.id}
                    component="li"
                    sx={{
                      position: "relative",
                      aspectRatio: "4 / 5",
                      borderRadius: `${brandRadii.media}px`,
                      overflow: "hidden",
                      bgcolor: "secondary.main",
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 600px) 80vw, (max-width: 900px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                ))}
              </Box>

              {totalPages > 1 ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 4, md: 5 },
                  }}
                >
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    shape="rounded"
                    siblingCount={0}
                    boundaryCount={1}
                    aria-label={gallerySection.paginationLabel}
                  />
                </Box>
              ) : null}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}
