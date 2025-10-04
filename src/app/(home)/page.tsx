import React from "react";

import { Launch } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

import { DynamicText, H2LightEffect, MainContainer, Search } from "@/app/components";

export default function Home() {
  return (
    <MainContainer>
      <Container
        sx={{ display: "flex", minHeight: "inherit", flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Stack textAlign="center" mt={{ xs: 2, md: 0.2 }}>
          <H2LightEffect />
          <Typography mb={5}>
            فقط با توضیح چیزی که دنبالشی یا حتی ارسال تصویر اون، برات پیداش میکنیم و به دستت میرسونیم
          </Typography>
          {/* search component in home */}
          <Search />
          <DynamicText />
          <Box mx={"auto"}>
            <Button variant="outlined" color="primary" size="large" startIcon={<Launch sx={{ ml: 2.5 }} />}>
              رفتن به فروشگاه مردادینو
            </Button>
          </Box>
        </Stack>
      </Container>
    </MainContainer>
  );
}
